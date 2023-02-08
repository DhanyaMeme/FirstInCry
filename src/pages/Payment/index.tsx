import { useMemo } from "react";
import Minicart from "../../components/Minicart/Minicart";
import { SelectedAddress } from "../../components/Payment/SelectedAddress";
import { StripeCard } from "../../components/Payment/StripeCard";
import { useAuth } from "../../contexts/AuthContext";
import usePath from "../../hooks/usePath";
import { addressList } from "../../redux/slices/address/address.selector";
import { IAddress } from "../../redux/slices/address/address.type";
import { placeOrderAsync } from "../../redux/slices/profile/profile.reducer";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { IF } from "../../ui_kits/IF";
import { findArrayItems } from "../../utils/generics";
import { isEmpty } from "../../utils/script";

export const Payment = () => {
  
  const addressId = usePath();
  const { data: addresses } = useAppSelector(addressList);
  const { user } = useAuth();
  const dispatch = useAppDispatch();

  const selectedAddress = useMemo(() => {
    let computedData: IAddress | undefined = {} as IAddress;

    if (addresses) {
      computedData = findArrayItems(addresses.address, {
        id: +addressId,
      });
    }

    return computedData;
  }, [addresses, addressId]);

  const onPaymentSuccess = (id: any) => {
    const OrderItems = {
      cusId: user as string,
      addId: parseInt(addressId),
      pstatus: "success",
      tnxid: id,
    };
    dispatch(placeOrderAsync(OrderItems));
  };

  const PaymentProps = {
    name: selectedAddress?.name,
    amount: 100,
    email: selectedAddress?.email,
    phoneNo: selectedAddress?.phone,
    onSuccess: onPaymentSuccess,
  };

  return (
    <div className="PageLayout">
      <div className="PageLayout--Primary">
        <IF condition={!isEmpty(SelectedAddress)}>
          <SelectedAddress address={selectedAddress as IAddress} />
          <StripeCard PaymentProps={PaymentProps as any} />
        </IF>
      </div>
      <div className="PageLayout--Secondary">
        <Minicart />
      </div>
    </div>
  );
};
