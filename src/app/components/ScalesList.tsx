'use client'

interface ScalesListProps {
  range: number[]
  onDrop: (e: React.DragEvent) => void
  allowDrop: (e: React.DragEvent) => void
}

const ScalesList: React.FC<ScalesListProps> = ({
  range,
  onDrop,
  allowDrop,
}) => {
  return (
    <div>
      {range.map((num) => (
        <div key={num}>
          <div>{num}</div>
          <div id={num.toString()} onDrop={onDrop} onDragOver={allowDrop} />
        </div>
      ))}
    </div>
  )
}

export default ScalesList
