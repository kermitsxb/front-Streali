import Label from '../label/label';

export enum InputState {
  Normal = 'normal',
  Focus = 'focus',
  Error = 'error',
  Success = 'success',
}

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
  className?: string;
  labelClassName?: string;
  containerClassName?: string;
  state?: InputState;
  errorMessage?: string;
}

export function Input(props: InputProps) {
  const {
    label,
    labelClassName = '',
    className = '',
    containerClassName = '',
    state = InputState.Normal,
    errorMessage,
    ...inputProps
  } = props;

  const stateClassName = {
    [InputState.Normal]: '',
    [InputState.Focus]: '!border-primary-300',
    [InputState.Error]: '!border-error-500',
    [InputState.Success]: '!border-success-500',
  };

  return (
    <label className={containerClassName}>
      {label && <Label className={labelClassName}>{label}</Label>}
      <input
        className={`h-10 w-full border-2 border-dark-300 text-sm text-white bg-dark-500 rounded-md px-4 outline-none focus:border-primary-300 ${stateClassName[state]} ${className}`}
        {...inputProps}
        data-testid="input"
      />
      {errorMessage && (
        <span
          className="text-xs text-error-500 mt-1.5"
          data-testid="input-errormessage"
        >
          {errorMessage}
        </span>
      )}
    </label>
  );
}

export default Input;
