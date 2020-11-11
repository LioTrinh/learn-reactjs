import React from 'react';
import PropTypes from 'prop-types';
import Albumlist from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Hinh Duyen 1',
            thumbnailUrl: 'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/123917425_2774667366147066_6204030706270332910_n.jpg?_nc_cat=108&ccb=2&_nc_sid=8bfeb9&_nc_ohc=ji_qH0srT4QAX-7uYxv&_nc_ht=scontent.fsgn5-5.fna&oh=e70edc66ee6980a55d47b827d164b1e2&oe=5FD18D2E',
        },
        {
            id: 2,
            name: 'Hinh Duyen 2',
            thumbnailUrl: 'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/123839462_2774667456147057_7554682073438124150_n.jpg?_nc_cat=110&ccb=2&_nc_sid=8bfeb9&_nc_ohc=9b-xTxp16sAAX8pyQPV&_nc_ht=scontent.fsgn5-3.fna&oh=7f3dccc577d45ab9998647e0c96d4757&oe=5FD0C3E0',
        },
        {
            id: 3,
            name: 'Hinh Duyen 3',
            thumbnailUrl: 'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/124267463_2774667386147064_3339898069717647659_n.jpg?_nc_cat=100&ccb=2&_nc_sid=8bfeb9&_nc_ohc=Ki59oeuI-KwAX-2Q6gw&_nc_ht=scontent.fsgn5-5.fna&oh=71b0c56483436c9c87705ca3d33ce2a0&oe=5FD0EB81',

        }
    ];
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <Albumlist albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;