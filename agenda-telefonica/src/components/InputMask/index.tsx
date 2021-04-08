import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  InputHTMLAttributes,
  CSSProperties,
} from 'react';

import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';
import ReactInputMask from 'react-input-mask';

import { Container, Error } from '~/components/Input/styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  mask: string;
  maskChar?: string;
  containerStyle?: CSSProperties;
}

const InputMask: React.FC<InputProps> = ({
  name,
  containerStyle,
  type = 'text',
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container
      isFilled={false}
      isErrored={!!error}
      isFocused={isFocused}
      style={containerStyle}
    >
      <ReactInputMask
        {...{ name, type, defaultValue }}
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#C53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default InputMask;