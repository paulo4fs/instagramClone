/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import like from '../assets/img/like.png';
import send from '../assets/img/send.png';
import likeada from '../assets/img/likeada.png';

const styles = StyleSheet.create({
  areaFeed: {},
  nomeUsuario: {
    fontSize: 22,
    textAlign: 'left',
    color: '#000',
  },
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  imagemPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  imagemPostagem: {
    flex: 1,
    height: 400,
    alignItems: 'center',
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 5,
  },
  iconeLike: {
    width: 33,
    height: 33,
  },
  iconeSend: {
    width: 33,
    height: 33,
  },
  btnSend: {
    marginLeft: 10,
  },
  viewRodape: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descRodape: {
    paddingLeft: 5,
    fontSize: 15,
    color: '#000',
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 5,
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

function mostraLikers(likers) {
  if (likers === 0) {
    return;
  }
  return (
    <Text style={styles.likes}>
      {likers > 1 ? `${likers} curtidas` : `${likers} curtida`}
    </Text>
  );
}

export default function Lista(props) {
  function liking() {
    props.handleFeed(props.data);
  }
  return (
    <View style={styles.areaFeed}>
      <View style={styles.viewPerfil}>
        <Image
          source={{uri: props.data.imagemPerfil}}
          style={styles.imagemPerfil}
        />
        <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
      </View>
      <Image
        resizeMode="cover"
        style={styles.imagemPostagem}
        source={{uri: props.data.imagemPostagem}}
      />

      <View style={styles.areaBtn}>
        <TouchableOpacity onPress={liking}>
          <Image
            source={props.data.likeada ? likeada : like}
            style={styles.iconeLike}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend}>
          <Image source={send} style={styles.iconeLike} />
        </TouchableOpacity>
      </View>

      {mostraLikers(props.data.likers)}

      <View style={styles.viewRodape}>
        <Text style={styles.nomeRodape}>{props.data.nome}</Text>

        <Text style={styles.descRodape}>{props.data.descricao}</Text>
      </View>
    </View>
  );
}
