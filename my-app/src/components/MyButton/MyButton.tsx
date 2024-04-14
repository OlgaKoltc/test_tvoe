type Props = {
  text: string;
  className: string;
};
export default function ({ text, className }: Props) {
  return <button className={className}>{text}</button>;
}
