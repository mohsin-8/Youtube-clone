import React from 'react'
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow.js';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0x00ffffff-no-rj"
                channel="Clever Programmer"
                verified
                subs="906k"
                noOfVideos={390}
                description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
            />

            <hr />

            <VideoRow
                views="1.4M"
                subs="609k"
                title="🔴 Build a TWITTER Clone with REACT JS for Beginners"
                timestamp="1 hour ago"
                channel="Clever Programmer"
                image="https://i.ytimg.com/an_webp/rJjaqSTzOxI/mqdefault_6s.webp?du=3000&sqp=CPTwjIIG&rs=AOn4CLDLBwiaV9EHwnE0rm7qFOkjwx7fCw"
                description="Do you want a FREE one hour traning...Check this out"
            />

            <VideoRow
                views="1.4M"
                subs="609k"
                title="🔴 Build a TWITTER Clone with REACT JS for Beginners"
                timestamp="1 hour ago"
                channel="Clever Programmer"
                image="https://i.ytimg.com/an_webp/rJjaqSTzOxI/mqdefault_6s.webp?du=3000&sqp=CPTwjIIG&rs=AOn4CLDLBwiaV9EHwnE0rm7qFOkjwx7fCw"
                description="Do you want a FREE one hour traning...Check this out"
            />

            <VideoRow
                views="1.4M"
                subs="609k"
                title="🔴 Build a TWITTER Clone with REACT JS for Beginners"
                timestamp="1 hour ago"
                channel="Clever Programmer"
                image="https://i.ytimg.com/an_webp/rJjaqSTzOxI/mqdefault_6s.webp?du=3000&sqp=CPTwjIIG&rs=AOn4CLDLBwiaV9EHwnE0rm7qFOkjwx7fCw"
                description="Do you want a FREE one hour traning...Check this out"
            />

            <VideoRow
                views="1.4M"
                subs="609k"
                title="🔴 Build a TWITTER Clone with REACT JS for Beginners"
                timestamp="1 hour ago"
                channel="Clever Programmer"
                image="https://i.ytimg.com/an_webp/rJjaqSTzOxI/mqdefault_6s.webp?du=3000&sqp=CPTwjIIG&rs=AOn4CLDLBwiaV9EHwnE0rm7qFOkjwx7fCw"
                description="Do you want a FREE one hour traning...Check this out"
            />

            <VideoRow
                views="1.4M"
                subs="609k"
                title="🔴 Build a TWITTER Clone with REACT JS for Beginners"
                timestamp="1 hour ago"
                channel="Clever Programmer"
                image="https://i.ytimg.com/an_webp/rJjaqSTzOxI/mqdefault_6s.webp?du=3000&sqp=CPTwjIIG&rs=AOn4CLDLBwiaV9EHwnE0rm7qFOkjwx7fCw"
                description="Do you want a FREE one hour traning...Check this out"
            />

            <VideoRow
                views="1.4M"
                subs="609k"
                title="🔴 Build a TWITTER Clone with REACT JS for Beginners"
                timestamp="1 hour ago"
                channel="Clever Programmer"
                image="https://i.ytimg.com/an_webp/rJjaqSTzOxI/mqdefault_6s.webp?du=3000&sqp=CPTwjIIG&rs=AOn4CLDLBwiaV9EHwnE0rm7qFOkjwx7fCw"
                description="Do you want a FREE one hour traning...Check this out"
            />

            <VideoRow
                views="1.4M"
                subs="609k"
                title="🔴 Build a TWITTER Clone with REACT JS for Beginners"
                timestamp="1 hour ago"
                channel="Clever Programmer"
                image="https://i.ytimg.com/an_webp/rJjaqSTzOxI/mqdefault_6s.webp?du=3000&sqp=CPTwjIIG&rs=AOn4CLDLBwiaV9EHwnE0rm7qFOkjwx7fCw"
                description="Do you want a FREE one hour traning...Check this out"
            />
        </div>
    )
}

export default SearchPage
