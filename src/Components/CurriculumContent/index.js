import React from 'react';
import CurriculumContentStyle from './index.css';
import LanguageIconTwoTone from '@material-ui/icons/LanguageTwoTone';
import BusinessCenterIconTwoTone from '@material-ui/icons/BusinessCenterTwoTone';
import BookTwoToneIcon from '@material-ui/icons/BookTwoTone';
import PanToolTwoToneIcon from '@material-ui/icons/PanToolTwoTone';

const CurriculumContent = () => {
    const cards = [
        <MyCard 
            title="Foreign Languages"
            badge="Main"
            icon={<LanguageIconTwoTone></LanguageIconTwoTone>}
            listItems= {[
                'English',
                'Russian',
            ]}
        ></MyCard>,
        <MyCard 
            title="International Relations and History"
            badge="Main"
            icon={<BookTwoToneIcon></BookTwoToneIcon>}
            listItems= {[
                'World history and Russian history',
                'International trade',
                'Global policy',
                'International conflicts',
                'Theory of international relations',
            ]}
        ></MyCard>,
        <MyCard 
            title="Economics business law"
            badge="Main"
            icon={<BusinessCenterIconTwoTone></BusinessCenterIconTwoTone>}
            listItems= {[
                'Economics',
                'Entrepreneurship',
                'State law of Russia and foreign countries',
                'Managment',
            ]}
        ></MyCard>,
        <MyCard 
            title="International cooperation with Russia"
            badge="Special"
            icon={<PanToolTwoToneIcon></PanToolTwoToneIcon>}
            listItems= {[
                'Organization and support of business in Russia',
                'Regional integration associations',
                'Business law of Russia',
            ]}
        ></MyCard>,
    ]

    return (
        <div className="container">
            <div className="curriculum-content">
                <h2>Ongoing Curriculum</h2>
                <div className="cards">
                    {cards.map(card => card)}
                </div>
            </div>
        </div>
    );
};

const MyCard = ({title, badge, icon, listItems=[]}) => {
    return (
        <div className="my-card">
            {icon}
            <div>
                <div className="title">
                    <h3>{title}</h3>
                    <span className={`badge ${badge=='Special' ? "special" : ""}`}>{badge}</span>
                </div>
                <ul>
                    {listItems.map(i => (<li>{i}</li>))}
                </ul>
            </div>
        </div>
    );
}

export default CurriculumContent;
