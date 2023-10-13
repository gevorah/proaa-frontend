import './index.css'

type SeparatorProps = {
  text?: string
}

function Separator(props: SeparatorProps) {
  const { text } = props

  return (
    <div className="separator">
      <div />
      {text && (
        <>
          <span>{text}</span> <div />
        </>
      )}
    </div>
  )
}

export default Separator
