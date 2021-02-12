import React, { useEffect, useRef, useState } from 'react'

import starWarsSound from './mp3/starwarssong.mp3'
import * as SI from './intro.styled'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import * as IA from '../../store/intro.action'
import VolumeUpIcon from '@material-ui/icons/VolumeUp'
import VolumeOffIcon from '@material-ui/icons/VolumeOff'
import SkipNextIcon from '@material-ui/icons/SkipNext'


const Intro = () => {
  const audioRef = useRef()
  const [muted, skipIntro] = useSelector(({ intro }) => ([
    intro.muted,
    intro.skipIntro,
  ]))
  const dispatch = useDispatch()
  // dispatch(IA.skipIntroAction(skipIntro))

  useEffect(
    () => {
      audioRef.current.volume = 1
      audioRef.current.muted = muted
      !muted && audioRef.current.play()
      console.log(audioRef.current)
      setTimeout(() => {
        dispatch(IA.skipIntroAction(true))
      }, 9999999920000);
    },
    [muted]
  )

  const toggleMute = () => {
    // setMuted(!muted)
    dispatch(IA.setMutedAction(!muted))
  }
  const handleSkipIntro = () => {
    dispatch(IA.skipIntroAction(true))
  }

  return (
    <>
      {!skipIntro && <SI.DeathStarBackgroud>

        {muted && <VolumeOffIcon
          style={{ color: "white", margin: '2rem' }}
          onClick={toggleMute}
        />}
        {!muted && <VolumeUpIcon
          style={{ color: "white", margin: '2rem' }}
          onClick={toggleMute}
        />}

        <SI.StyleCredits>
          <SI.StyledCrawl>
            <audio ref={audioRef} src={starWarsSound} />
            <h1>Ultimate StarWars Battle</h1>
            <p> Build an application to select random people or starships and render their details to see who would win based on a common attribute.</p>
            <p>A person with greater mass wins, a starship with more crew wins.</p>
            <p>Once two cards are displayed the app should declare one of the cards a winner based on the higher common attribute.</p>
            <p>Being Creative</p>
          </SI.StyledCrawl>
        </SI.StyleCredits>
        <SI.StyledButton
          onClick={handleSkipIntro}
        >
          Skip Intro <SkipNextIcon />
        </SI.StyledButton>
      </SI.DeathStarBackgroud>}
    </>
  )
}

export { Intro }
