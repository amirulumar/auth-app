import React from 'react';
import {
  Text,
  StyleSheet,
  ActivityIndicator,
  TextStyle,
  ViewStyle,
  ActivityIndicatorProps as RNActivityIndicatorProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
  title?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  loading?: boolean;
  activityIndicatorProps?: RNActivityIndicatorProps;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  disabled = false,
  loading = false,
  activityIndicatorProps,
  children,
  ...restProps
}) => {
  const buttonStyle = [styles.button, style, disabled && styles.buttonDisabled];
  const buttonTextStyle = [styles.buttonText, textStyle, disabled && styles.buttonTextDisabled];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={disabled || loading ? undefined : onPress}
      disabled={disabled || loading}
      {...restProps}
    >
      {loading ? (
        <ActivityIndicator color={styles.buttonText.color} {...activityIndicatorProps} />
      ) : (
        children || (title && <Text style={buttonTextStyle}>{title}</Text>)
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3', // Primary blue color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    width: "100%"
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonDisabled: {
    backgroundColor: '#BDBDBD', // Light gray for disabled state
    opacity: 0.7,
  },
  buttonTextDisabled: {
    color: '#FFFFFF',
    opacity: 0.7,
  },
});

export default CustomButton;