import * as constants from "../../../actions/Contants/canstants";
import axios from 'axios';

const changeMusicList = (result) => ({
    type: constants.CHANGE_MUSIC_LIST,
    musicList: result
});

export const fetchMusicList = () => {
    return (dispatch) => {
        axios.get('/api/getMusic.json').then( (res) => {
            const result = res.data.data;
            console.log(result);
            dispatch(changeMusicList(result));
        })
    }
};