import React, { Component } from 'react';
import { ThemeContext, themes } from './dynamic-context/theme-context';
import ThemedButton from './dynamic-context/themed-button';

function Page(props) {
  return (
    <div>{props.children}</div>
  )
}

function Section(props) {
  return <div>{props.children}</div>
}

function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme} >
      Change Theme
    </ThemedButton>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };
  }
  
  toggleTheme = () => {
    this.setState(state => ({
      theme: 
        state.theme === themes.dark
          ? themes.light
          : themes.dark
    }));
  };

  render() {
    return (
      <Page>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <Section>
          <ThemedButton />
        </Section>
      </Page>
    )
  }
}
