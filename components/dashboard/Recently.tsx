import Tabs, { TabPane } from 'rc-tabs';
import Image from 'next/image';
import NftList from './nftList';
import LandList from './landList';
import ItemList from './itemList';
import BoxList from './boxList';

const tab_axies=<div className='flex items-center justify-center'>
            <Image src="/assets/img/tab-axie.png" width={24} height={24}/>
            <div className='ml-2'>Axies</div>
          </div>
const tab_land=<div className='flex items-center justify-center'>
            <Image src="/assets/img/tab-land.png" width={24} height={24}/>
            <div className='ml-2'>Land</div>
          </div>
const tab_items=<div className='flex items-center justify-center'>
            <Image src="/assets/img/tab-item.png" width={24} height={24}/>
            <div className='ml-2'>Items</div>
          </div>
const tab_bundles=<div className='flex items-center justify-center'>
            <Image src="/assets/img/tab-bundle.png" width={24} height={24}/>
            <div className='ml-2'>Boundles</div>
          </div>
const Recently = (props:any) => {
  return (
    <>
      <div className="w-[1220px] mx-auto mt-8 grid grid-cols-2 gap-4">
        <div>
          <p className='text-20 font-semibold'>Recently listed</p>
          <div className="general-tabs rounded-md border border-gray-700 mt-2">          
            <Tabs defaultActiveKey="1" >
              <TabPane tab= {tab_axies} key="1">
                <NftList items={props.items}/>
              </TabPane>
              <TabPane tab= {tab_land} key="2">
                <LandList items={props.items}/>
              </TabPane>
              <TabPane tab= {tab_items} key="3">
                <ItemList items={props.items}/>
              </TabPane>
              <TabPane tab= {tab_bundles} key="4">
                <BoxList items={props.items}/>
              </TabPane>
            </Tabs>          
          </div>
        </div>
        <div>
          <p className='text-20 font-semibold'>Recently Sold</p>
          <div className="general-tabs rounded-md border border-gray-700 mt-2">          
            <Tabs defaultActiveKey="1" >
              <TabPane tab= {tab_axies} key="1">
                <NftList items={props.items}/>
              </TabPane>
              <TabPane tab= {tab_land} key="2">
                <LandList items={props.items}/>
              </TabPane>
              <TabPane tab= {tab_items} key="3">
                <ItemList items={props.items}/>
              </TabPane>
              <TabPane tab= {tab_bundles} key="4">
                <BoxList items={props.items}/>
              </TabPane>
            </Tabs>          
          </div>
        </div>
      </div>
    </>
  )
}

export default Recently