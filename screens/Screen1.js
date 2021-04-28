import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, StatusBar, Button} from 'react-native';
import {Modal, Mapas, Entradas} from './components';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

const Mapa = ({route}) => {
  const [point, setPoint] = useState([]);
  const [pointTemp, setPointTemp] = useState({});
  const [name, setName] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [visibilityFilter, setVisibilityFilter] = useState('new_point'); //new_point or all_point
  const [nameComponent, setNameComponent] = useState();
  const {getItem: mark, setItem: setMark} = useAsyncStorage('@points');

  React.useEffect(() => {
    const getItem = async() => {
      let name = route?.params?.name;
      if (name === undefined) {
        name = 'post';
      }
      if (name === 'state'){
        const item = await mark()
        setPoint(JSON.parse(item))
      }
      else setPoint([])
    }
    getItem()
  }, [route.params]);

  // const {name = 'post'} = route.params (asignando valor a un objeto indefinido)
  console.log(point)
  const handleLongPress = ({nativeEvent}) => {
    setVisibilityFilter('new_point');
    setPointTemp(nativeEvent.coordinate);
    setVisibility(true);
  };

  const handleChangeText = text => {
    setName(text);
  };

  const handleSubmit = async() => {
    const newPoint = {coordinate: pointTemp, name: name};
    const _point = point.concat(newPoint)
    setPoint(_point);
    setVisibility(false);
    setName('');
    await setMark(JSON.stringify(_point))
    //setStateX(point.concat(newPoint))
  };

  //const handleList = () => {
    //setVisibilityFilter('all_point');
    //setVisibility(true);
  //};

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <Mapas onLongPress={handleLongPress} point={point} />
      <Modal visibility={visibility}>
        {visibilityFilter === 'new_point' ? (
          <>
            <Entradas
              title="Name"
              placeholder="Name of Search"
              onChangeText={handleChangeText}
            />
            <Button title="Aceptar" onPress={handleSubmit} />
          </>
        ) : (
          <Text>lalala</Text>
        )}
      </Modal>
    </View>
  );
};
export default Mapa;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  centrado: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
