function MenuButton(props) {
    const { isNavOpen, onMenuClick } = props;

    const handleMenuClick = (e) => {
        onMenuClick(!isNavOpen);
    }

    const styles = {
        container: {
          cursor: 'pointer',
          padding: '5px',
          position: 'relative',
          top: '0',
          right: '0',
          zIndex: '3',
        },
        line: {
          height: '3px',
          width: '30px',
          background: '#36687d',
          transition: 'all 0.2s ease',
        },
        lineTop: {
          transform: isNavOpen ? 'rotate(45deg)':'none',
          borderRadius: '20px',
          transformOrigin: 'top left',
          marginBottom: '8px',
        },
        lineMiddle: {
          opacity: isNavOpen ? 0: 1,
          borderRadius: '20px',
          transform: isNavOpen ? 'translateX(-16px)':'none',
        },
        lineBottom: {
          transform: isNavOpen ? 'translateX(-2px) translateY(-1px) rotate(-45deg)':'none',
          transformOrigin: 'top left',
          borderRadius: '20px',
          marginTop: '8px',
        },       
    }

    return (
        <div style={styles.container} onClick={handleMenuClick}>
            <div style={{...styles.line,...styles.lineTop}} className="line"/>
            <div style={{...styles.line,...styles.lineMiddle}} className="line"/>
            <div style={{...styles.line,...styles.lineBottom}} className="line"/>
        </div>
    )
}

export default MenuButton;