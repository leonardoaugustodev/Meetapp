import React, { useRef, useEffect, useState } from 'react';
import { parseISO } from 'date-fns';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt-BR';
import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name }) {
  registerLocale('pt-BR', pt);
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={parseISO(selected)}
        onChange={date => setSelected(date.toISOString())}
        ref={ref}
        locale="pt-BR"
        showTimeSelect
        timeFormat="p"
        timeIntervals={30}
        dateFormat="Pp"
      />
      {error && <span>{error}</span>}
    </>
  );
}
