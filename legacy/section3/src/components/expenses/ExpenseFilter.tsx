import _ from 'lodash';
import './ExpenseFilter.css';

interface Props {
  defaultYear?: number;
  onYearSelect?: (year?: number) => void;
}

export default function ExpenseFilter({ defaultYear, onYearSelect }: Props) {
  const years = [2022, 2021, 2020, 2019];
  const selectYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const year = _.isEmpty(event.target.value) ? undefined : _.toNumber(event.target.value);
    onYearSelect?.(year);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label htmlFor="selectYear">Filter by year</label>
        <select id="selectYear" onChange={ selectYear } value={ defaultYear }>
          <option value="" key="undefined">No filter</option>
          { years.map(year => <option value={ year } key={ year }>{ year }</option>) }
        </select>
      </div>
    </div>
  );
}
