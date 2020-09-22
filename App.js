import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Lista from './src/Lista';
import logo from './src/assets/img/logo.png';
import send from './src/assets/img/send.png';

const data = [
  {
    id: 1,
    nome: 'Matheus',
    descricao: 'agamamou lob lob lob jo jo!!!',
    imagemPerfil:
      'https://images.vexels.com/media/users/3/140748/isolated/preview/5b078a59390bb4666df98b49f1cdedd0-avatar-de-perfil-masculino-by-vexels.png',
    imagemPostagem: 'https://imagens.canaltech.com.br/236607.471195-Lua.jpg',
    likeada: true,
    likers: 5,
  },
  {
    id: 2,
    nome: 'alexandre',
    descricao: 'agamamou lob lob lob jo jo',
    imagemPerfil:
      'https://images.vexels.com/media/users/3/140748/isolated/preview/5b078a59390bb4666df98b49f1cdedd0-avatar-de-perfil-masculino-by-vexels.png',
    imagemPostagem: 'https://imagens.canaltech.com.br/236607.471195-Lua.jpg',
    likeada: true,
    likers: 1,
  },
  {
    id: 3,
    nome: 'joje',
    descricao: 'agamamou lob lob lob jo jo',
    imagemPerfil:
      'https://images.vexels.com/media/users/3/140748/isolated/preview/5b078a59390bb4666df98b49f1cdedd0-avatar-de-perfil-masculino-by-vexels.png',
    imagemPostagem: 'https://imagens.canaltech.com.br/236607.471195-Lua.jpg',
    likeada: false,
    likers: 0,
  },
  {
    id: 4,
    nome: 'jojo',
    descricao: 'agamamou lob lob lob jo jo',
    imagemPerfil:
      'https://images.vexels.com/media/users/3/140748/isolated/preview/5b078a59390bb4666df98b49f1cdedd0-avatar-de-perfil-masculino-by-vexels.png',
    imagemPostagem: 'https://imagens.canaltech.com.br/236607.471195-Lua.jpg',
    likeada: true,
    likers: 1,
  },
];

export default function App() {
  const [feed, setFeed] = useState(data);

  function handleFeed(dados) {
    if (dados.likeada) {
      const newData = {
        ...dados,
        likeada: false,
        likers: dados.likers - 1,
      };
      let oldData = [...feed];
      oldData = oldData.map((element) =>
        element.id === newData.id ? newData : element,
      );
      setFeed([...oldData]);
    } else {
      const newData = {
        ...dados,
        likeada: true,
        likers: dados.likers + 1,
      };
      let oldData = [...feed];
      oldData = oldData.map((element) =>
        element.id === newData.id ? newData : element,
      );
      setFeed([...oldData]);
    }
  }
  console.log(feed.length);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={logo} style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={send} style={styles.send} />
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={feed}
        renderItem={({item}) => <Lista data={item} handleFeed={handleFeed} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: 'black',
    elevation: 1,
  },
  logo: {},
  send: {
    width: 23,
    height: 23,
  },
});
