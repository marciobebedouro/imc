import React, {Component} from 'react';
//Esta é uma biblioteca que contém elementos pesonalizados
//Que podemos utilizar em nosso código.
import {Button} from 'react-native-elements';
import {PropTypes} from 'prop-types';
//import Icon from 'react-native-vector-icons/MaterialIcons';
// Este elemento jé u componete de classe
export default class BotaoComponent extends Component {
  static propTypes = {
    titulo: PropTypes.string,
    handleClick: PropTypes.func,
    cor: PropTypes.string,
  };

  render() {
    return (
      <Button
        //icon={<Icon name="cached" size={30} color="#5bc023" />}
        icon={{name: 'cached', size: 30, color: '#5bc023'}}
        iconRight
        title={this.props.titulo}
        onPress={this.props.handleClick}
        //color={this.props.cor}
      />
    );
  }
}
