import { useTheme } from '../hooks/useTheme'

// styles
import './ThemeSelector.css'

const themeColors = ['#58249c','#249C6b','#b70233']

export default function ThemeSelector() {
    const { changeColor } = useTheme()

  return (
    <div className='theme-selector'>
        <div className='theme-buttons'>
            {themeColors.map(color => (
                <div 
                    ket={color}
                    onClick={()=> changeColor(color)}
                    style={{background:color}}
                />
            ))}
        </div>      
    </div>
  )
}
