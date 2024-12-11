import ItemDetail from '@/components/shopComponents/itemDetail';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import '../src/app/globals.css';

const Item = () => {
  const router = useRouter();
  const { itemID } = router.query;
  const [currentID, setCurrentID] = useState(0);

  useEffect(() => {
    if(itemID) {
      setCurrentID(itemID);
    }
  }, [itemID]);

  console.log("BURADAYIM LAN: " + currentID);
  return (
    <ItemDetail itemID={currentID}/>
  )
}

export default Item;