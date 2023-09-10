"use client";


import { StoreModal } from "@/components/modals/store-modal";
import { useStoreModal } from "@/lib/hooks/use-store-modal";
import { useEffect } from "react";


const SetupPage = ()=> {
    const onOpen = useStoreModal((state) => state.onOpen);
    const isOpen = useStoreModal((state) => state.isOpen);

    useEffect(() => {
      if (!isOpen) {
        onOpen();
      }
    },[isOpen,onOpen]);

    return (
      <div className="p-4">
        <StoreModal />
      </div>
    );
  }
export default SetupPage;