/* eslint-disable-next-line */
export interface TitleProps {
  text?: string;
}

export function Title(props: TitleProps) {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
}

export default Title;
