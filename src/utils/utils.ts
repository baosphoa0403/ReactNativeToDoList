import Toast from 'react-native-toast-message';

export const showToast = (message: string, text2: string) => {
  Toast.show({
    type: 'success',
    text1: message,
    text2: `${text2} 👋`,
  });
};
