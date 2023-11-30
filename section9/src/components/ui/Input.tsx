import _ from 'lodash';
import { DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface Props {
  asTextarea?: boolean;
  label: string;
}

type TextareaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type TextareaAttributes = TextareaProps & { asTextarea: true };
type InputAttributes = InputProps & { asTextarea?: false };
type ElementAttributes = TextareaAttributes | InputAttributes;


export default function Input(props: Props & ElementAttributes) {
  const className = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  const input = () => {
    if(props.asTextarea) {
      const attrs = _.omit(props, ['label', 'asTextarea']); // solution 1
      return <textarea className={ className } { ...attrs  } />;
    }

    const { label, asTextarea, ...elemenAttributes } = props; // solution 2
    return <input className={ className } { ...elemenAttributes } />
  }

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500" htmlFor={ props.id }>{ props.label }</label>
      { input() }
    </p>
  );
}
