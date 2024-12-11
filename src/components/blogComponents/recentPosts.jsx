import React from 'react';
import RecentPostItem from './recentPostItem';
import photoFirst from '../../../public/assets/recentFirst.png';
import photoSecond from '../../../public/assets/recentSecond.png';
import photoThird from '../../../public/assets/recentThird.png';
import photoFourth from '../../../public/assets/recentFourth.png';
import photoFifth from '../../../public/assets/recentFifth.png';

const RecentPosts = () => {
  return (
    <div className="flex flex-col gap-8">
        <h2 className="text-black text-2xl font-medium">Recent Posts</h2>
        <RecentPostItem title={'Going all-in with millennial design'} date={'03 Aug 2022'} photo={photoFirst}/>
        <RecentPostItem title={'Exploring new ways of decorating'} date={'03 Aug 2022'} photo={photoSecond}/>
        <RecentPostItem title={'Handmade pieces that took time to make'} date={'03 Aug 2022'} photo={photoThird}/>
        <RecentPostItem title={'Modern home in Milan'} date={'03 Aug 2022'} photo={photoFourth}/>
        <RecentPostItem title={'Colorful office redesign'} date={'03 Aug 2022'} photo={photoFifth}/>
    </div>
  )
}

export default RecentPosts