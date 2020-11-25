import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    //Khai báo để lấy đường dẫn chính sác từ thèn cha không hardcode
    const match = useRouteMatch();

    return (
        <Switch>
            <Route path={match.path} component={ListPage} exact />
            <Route path={`${match.path}/:todoId`} component={DetailPage} exact />

            <Route component={NotFound} exact />
        </Switch>
    );
}

export default TodoFeature;