import {StatsBlock, Info} from "./Stats.styled";

export default function Stats({tweets, folls}) {
    return (
        <StatsBlock>
            <Info>
            {tweets} tweets
            </Info>
            <Info>
            {folls.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} followers
            </Info>
        </StatsBlock>
    )
}