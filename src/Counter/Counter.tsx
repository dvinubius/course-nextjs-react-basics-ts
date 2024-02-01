import React, { useState } from 'react'
import './Counter.css'

interface CounterProps {
  // restrict to values that don't require pluralization
  animal?: 'Sheep' | 'Deer' | 'Fish' | 'Swine' | 'Buffalo'; 
  onIncrement?: () => void;
}

export const Counter = (props: CounterProps) => {
  
  const animal: CounterProps['animal'] = props.animal ?? 'Sheep';
  const onIncrement: CounterProps['onIncrement'] = props.onIncrement ?? (() => {});

  const [count, setCount] = useState<{
    value: number;
    lastUpdate: string;
  }>({
    value: 0,
    lastUpdate: new Date().toLocaleString()
  });
      
  const addOne = (): void => {
    setCount(
      (curr: {
        value: number; 
        lastUpdate: string
      }) => ({
        value: curr.value + 1,
        lastUpdate: new Date().toLocaleString()
      })
    );
    onIncrement();
  };

  const cloudItems: {cloud: '☁️', idx: number}[] = new Array(count.value)
    .fill('☁️')
    .map((cloud, idx) => ({ cloud, idx }));

  return (
    <div className='counter'>
      <div className='count'>{count.value} {animal}</div>
      <button className='btn' onClick={addOne}>INC</button>
      <div className='clouds'>
        {cloudItems.map((cloudItem) => (
          <div key={cloudItem.idx}>{cloudItem.cloud}</div>
        ))}
      </div>
    </div>
  )
}

export default Counter