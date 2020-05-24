import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {
  Container,
  AddButton,
  AddButtonImg,
  NotesList,
  NoNotes,
  NoNotesImg,
  NoNotesText,
} from './styles';
import NoteItem from '../../components/NoteItem';

export default () => {
  const navigation = useNavigation();
  const list = useSelector((state) => state.notes.list);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Your notes',
      headerRight: () => (
        <AddButton
          underlayColor="transparent"
          onPress={() => navigation.navigate('EditNote')}>
          <AddButtonImg source={require('../../assets/more.png')} />
        </AddButton>
      ),
    });
  }, []);

  const handleNotePress = (index) => {
    navigation.navigate('EditNote', {
      key: index,
    });
  };

  return (
    <Container>
      {list.length > 0 && (
        <NotesList
          data={list}
          renderItem={({item, index}) => (
            <NoteItem data={item} index={index} onPress={handleNotePress} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      {list.length === 0 && (
        <NoNotes>
          <NoNotesImg source={require('../../assets/note.png')} />
          <NoNotesText>No notes...</NoNotesText>
        </NoNotes>
      )}
    </Container>
  );
};
