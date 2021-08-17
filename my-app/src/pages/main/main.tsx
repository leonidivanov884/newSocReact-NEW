import React from 'react'
import {Route, Switch } from 'react-router-dom';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import './main.css'
import NewsList from "../news/newsList";
import TimeLine from "../../components/timeline/timeline";
import NewsOne from "../news/newsOne";
import Groups from '../groups/groups';
import GroupsOne from '../groups/GroupsOne';
import UsersAll from "../users/UsersAll";
import FriendsAll from '../friends/Firends';
import UsersOne from '../users/UsersOne';
import Todo from '../todo/Todo';

const Main = () => {
    const statusPanel = useSelector((state: RootState) => state.settings.statusLeftPanel)

    return (
        <div  className={`main ${statusPanel ? '' : 'active'}`}>
            <Switch>
                <Route path="/Todo/:id" component={Todo} />
                <Route path="/Friends" component={FriendsAll} />
                <Route path="/Users/:id" component={UsersOne} />
                <Route path="/Users" component={UsersAll} />
                <Route path="/Groups/:id" component={GroupsOne} />
                <Route path="/Groups" component={Groups} />
                <Route path="/news/:id" component={NewsOne} />

                <Route path="/">
                    <NewsList />
                    <TimeLine />
                </Route>
            </Switch>
        </div>
    )
}

export default Main
