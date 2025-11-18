import './ColorSwatchComponent.css'
import ErrorText from './TextComponents/ErrorTextComponent'

interface ColorSwatchProps {
  color: string
}

const rgbaRegex = /[\d\.]+/g
const hexRegex = /#[0-9a-fA-F]+/

function ColorSwatch({ color }: ColorSwatchProps) {
  let hexColor, rgbaColor: string | undefined

  if (color.match(hexRegex)) {
    const r = color.slice(1, 3)
    const g = color.slice(3, 5)
    const b = color.slice(5, 7)
    console.log(b)

    rgbaColor = `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)})`

    if (color.length > 7) {
      const a = color.slice(7, 9)
      rgbaColor = `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}, ${parseInt(a, 16)})`
    }

    hexColor = color
  } else {
    hexColor = '#'
    rgbaColor = color

    const numbers = color.match(rgbaRegex)
    if (!numbers || numbers.length < 3) {
      return <ErrorText>Invalid color</ErrorText>
    }

    for (const [index, strNumber] of numbers.entries()) {
      const number = parseInt(strNumber)
      if (number < 0 || number > 255) {
        return <ErrorText>{color} is not a valid color</ErrorText>
      }

      let hexNumber = index !== 3 ? number.toString(16).padStart(2, '0') : strNumber
      hexColor += hexNumber
    }
  }

  const handleCopyHex = async () => {
    try {
      await navigator.clipboard.writeText(hexColor)
      console.log('Copied to clipboard:', hexColor)
    } catch (err) {
      console.error('Failed to copy to clipboard: ', err)
    }
  }

  const handleCopyRgba = async () => {
    try {
      await navigator.clipboard.writeText(rgbaColor)
      console.log('Copied to clipboard:', rgbaColor)
    } catch (err) {
      console.error('Failed to copy to clipboard: ', err)
    }
  }

  return (
    <div className="color-swatch">
      <span onClick={handleCopyHex} style={{ color: color, '--swatch-color': color } as React.CSSProperties}>
        {hexColor}
      </span>
      <span onClick={handleCopyRgba} style={{ color: color, '--swatch-color': color } as React.CSSProperties}>
        {rgbaColor}
      </span>
      <div
        onClick={handleCopyHex}
        className="w-10 h-10 rounded-[100%] border-2 swatch"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  )
}

export default ColorSwatch
