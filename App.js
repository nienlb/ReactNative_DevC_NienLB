import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';

import Button from './components/Button';
import ChoiceCard from './components/ChoiceCard';

import CHOICES from './data/data';

const { width } = Dimensions.get('window')

export default class App extends React.Component {
  state = {
    gamePrompt: 'Fire',
    userChoice: {},
    computerChoice: {},
    countPlayed: 0,
    countWin: 0,
    countLose: 0,
    countTie: 0,
  }
  render() {
    const onPress = playerChoice => {
      const [result, compChoice, win, lose, tie] = getRoundOutcome(playerChoice);
      const newUserChoice = CHOICES.find(choice => choice.name === playerChoice);
      const newComputerChoice = CHOICES.find(choice => choice.name === compChoice);
      this.setState({
        gamePrompt: result,
        userChoice: newUserChoice,
        computerChoice: newComputerChoice,
        countPlayed: this.state.countPlayed + 1,
        countWin: win ? countWin + 1 : countWin,
        countLose: lose ? countLose + 1 : countLose,
        countTie: tie ? countTie + 1 : countTie,
      })
    };

    const randomComputerChoice = () =>
      CHOICES[Math.floor(Math.random() * CHOICES.length)];

    const getRoundOutcome = userChoice => {
      const computerChoice = randomComputerChoice().name;
      let result, win = false, lose = false, tie = false;

      if (userChoice === 'rock') {
        result = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
      }
      if (userChoice === 'paper') {
        result = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
      }
      if (userChoice === 'scissors') {
        result = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
      }
      if (userChoice === computerChoice) result = 'Tie game!';
      switch (result) {
        case 'Victory!':
          win = true
          break;
        case 'Defeat!':
          lose = true
          break;
        case 'Tie game!':
          tie = true
          break;
      }
      return [result, computerChoice, win, lose, tie];
    };

    const getResultColor = (gamePrompt) => {
      if (gamePrompt === 'Victory!') return { color: 'green' };
      if (gamePrompt === 'Defeat!') return { color: 'red' };
      if (gamePrompt === 'Tie game!') return { color: 'black' }
      return null;
    };

    const handleReset = () => {
      this.setState({
        gamePrompt: 'Fire',
        userChoice: {},
        computerChoice: {},
        countPlayed: 0,
        countWin: 0,
        countLose: 0,
        countTie: 0,
      })
    }
    const {
      gamePrompt,
      userChoice,
      computerChoice,
      countPlayed,
      countWin,
      countLose,
      countTie,
    } = this.state
    let percentWin = (countPlayed == 0) ? "-" : `${Math.round(countWin / countPlayed * 100)} %`
    let percentLose = (countPlayed == 0) ? "-" : `${Math.round(countLose / countPlayed * 100)} %`
    let percentTie = (countPlayed == 0) ? "-" : `${Math.round(countTie / countPlayed * 100)} %`
    return (
      <SafeAreaView style={styles.container} >
        <View style={styles.header}>
          <Text style={[getResultColor(gamePrompt), styles.title]}> {gamePrompt}</Text>
          <TouchableOpacity style={styles.resetBtnTouch} onPress={() => { handleReset() }}>
            {
              (countPlayed > 0 ? <Text style={styles.resetBtnText} > Reset </Text> : null)
            }
          </TouchableOpacity>
        </View>

        <View style={styles.choicesContainer}>
          <ChoiceCard player="Player" choice={userChoice} />
          <Text style={{ color: '#250902' }}>vs</Text>
          <ChoiceCard player="Computer" choice={computerChoice} />
        </View>
        {
          CHOICES.map(choice => {
            return <Button key={choice.name} name={choice.name} onPress={onPress} />;
          })
        }
        <Text> You played : {countPlayed} </Text>
        <Text> Win : {countWin} ({percentWin}) - Lose: {countLose} ({percentLose}) - Tie: {countTie} ({percentTie})</Text>
      </SafeAreaView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9ebee'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    paddingTop: 100,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { height: 5, width: 5 },
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    flex: 0.85,
    left: width / (1 / 0.15) / 2
  },
  resetBtnTouch: {
    flex: 0.15,
  },
  resetBtnText: {
    color: 'red'
  },

});