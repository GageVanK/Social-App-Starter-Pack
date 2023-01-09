export interface ButtonProps {
  click: Function;
  buttonText: string;
}
export const Button = ({ click, buttonText }: ButtonProps) => {
  return <button onClick={() => click()}>{buttonText}</button>;
};
