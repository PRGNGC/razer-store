'use client'
import styles from './styles.module.scss'
import { LaptopsBlock } from './laptops-block'
import { KeyboardsBlock } from './keyboards-block'
import { MiceBlock } from './mice-block'
import { AudioBlock } from './audio-block'
import { ComponentsBlock } from './components-block'
import { ChairsBlock } from './chairs-block'
import { StreamingBlock } from './streaming-block'
import { ConsoleBlock } from './console-block'
import { MobileBlock } from './mobile-block'
import { GearBlock } from './gear-block'
import { ActivityBanner } from './activity-banner'
import { WatchBanner } from './watch-banner'
import { HeadphoneBanner } from './headphone-banner'
import { MouseBanner } from './mouse-banner'
import { ManBanner } from './man-banner'

export function AllProducts(){
    return(
    <>
        <LaptopsBlock />
        <KeyboardsBlock />
        <ActivityBanner />
        <MiceBlock />
        <AudioBlock />
        <ManBanner />
        <ComponentsBlock />
        <ChairsBlock />
        <WatchBanner />
        <StreamingBlock />
        <ConsoleBlock />
        <MouseBanner />
        <MobileBlock />
        <GearBlock />
        <HeadphoneBanner />
    </>)
}