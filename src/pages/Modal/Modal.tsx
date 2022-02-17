/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectOpenModal} from '../../app/TaskProvider/Task.selector';
import {fetchCreateTask} from '../../app/TaskProvider/Task.service';
import {createTask, openCloseModal} from '../../app/TaskProvider/Task.slice';
import {restAPI} from '../../config/api';
import {showToast} from '../../utils/utils';

export interface CreateTask {
  title: string;
  description: string;
}
const ModalCreate = () => {
  const modalVisible = useSelector(selectOpenModal);
  const [task, setTask] = useState<CreateTask>({description: '', title: ''});
  const dispatch = useDispatch();

  const submit = () => {
    fetchCreateTask(task, restAPI)
      .then(res => {
        dispatch(
          createTask({
            id: res.id,
            description: res.description,
            title: res.title,
            status: res.status,
          }),
        );
        setTask({description: '', title: ''});
        showToast('Create Successfully', res.title + '-' + res.description);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        dispatch(openCloseModal());
      }}>
      <TouchableWithoutFeedback
        onPress={() => {
          dispatch(openCloseModal());
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Create Task</Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={{marginTop: 40, marginRight: 40}}>Title</Text>
              <TextInput
                style={styles.input}
                placeholder="Title"
                value={task.title}
                onChangeText={text => {
                  console.log(text);
                  setTask({...task, title: text});
                }}
              />
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={{marginTop: 40}}>Description</Text>
              <TextInput
                style={styles.input}
                placeholder="Description"
                value={task.description}
                onChangeText={text => {
                  console.log(text);
                  setTask({...task, description: text});
                }}
              />
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                dispatch(openCloseModal());
                submit();
              }}>
              <Text style={styles.textStyle}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: 300,
    height: 300,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    // marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderColor: 'gray',
    width: '60%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    margin: 15,
  },
});

export default ModalCreate;
