import React, { useContext } from 'react';
//import React, { Component } from 'react';
import { ThemeContext } from './theme-context';

const ThemedButton = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <button 
      {...props}
      style={{backgroundColor: theme.background }}
    />
  )
}

export default ThemedButton;

/*
//using Class component 
class ThemedButton extends Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}
      />
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
*/