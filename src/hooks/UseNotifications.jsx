import { useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";

const UseNotifications = () => {
  const contactMsgData = useSelector((state) => state.contactus);
  const applyJobData = useSelector((state) => state.applyJob);
  
  const successMsg = (msg) => toast.success(msg);
  const errorMsg = (msg) => toast.error(msg);


  //handel contactus Notifications
  useEffect(() => {
    if (contactMsgData) {
      if (contactMsgData.data) {
        if (contactMsgData.data.data) {
          if (contactMsgData.data.data.message) {
            successMsg(contactMsgData.data.data.message);
          }
        }
      }
    }
  }, [contactMsgData]);


  useEffect(() => {
    if (applyJobData?.data) {
      successMsg(applyJobData?.data?.data?.message);
    }
  }, [applyJobData]);
};

export default UseNotifications;
