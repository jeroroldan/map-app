import moduleName from '../logo.svg';


export const ReactLogo = () => {
  return (
    <img src={ moduleName } alt="logo de react" style={{ position:'fixed', bottom:'20px', right:'20px',width: '130px' ,  }} />
  )
}

export default ReactLogo