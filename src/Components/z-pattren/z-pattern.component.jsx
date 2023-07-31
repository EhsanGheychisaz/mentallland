import "./z-pattern.styles.css"

const Z_PATTERN_TYPE_CLASSES = {
    zPatternRtl: "z-pattern-rtl",
    zPatternLtr: "z-pattern-ltr",
}


const ZPattern = ({children, zPatternType, ...otherProps }) => {

    return (
        
        <div className={`z-pattern-container ${Z_PATTERN_TYPE_CLASSES[zPatternType]}`}
        >
            {children}
        </div>
  
    )
}

export default ZPattern