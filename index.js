"use strict";

const InAppBillingBridge = require("react-native").NativeModules.InAppBillingBridge;

class InAppBilling {
    /// [HSM-MINH] - Add extra methods to make compatible with DAYBREAK iOS app

    static canMakePayments() {
        return InAppBillingBridge.open()
            .then(() => InAppBillingBridge.canMakePayments());
    }

    static transactions(productId, openChannel) {
        if (openChannel) {
            return InAppBillingBridge.open()
                .then(() => InAppBillingBridge.getSubscriptionTransactionDetails(productId));
        } else {
            return InAppBillingBridge.getSubscriptionTransactionDetails(productId);
        }
    }

    static requestProducts(productId) {
        return InAppBillingBridge.getSubscriptionDetails(productId);
    }

    ///

    static open() {
      return InAppBillingBridge.open();
    }

    static close() {
      return InAppBillingBridge.close();
    }

    static finishTransaction(transactionId) {
        return InAppBillingBridge.close();
    }

    static loadOwnedPurchasesFromGoogle() {
        return InAppBillingBridge.loadOwnedPurchasesFromGoogle();
    }

    static purchase(productId, developerPayload) {
        return InAppBillingBridge.purchase(productId, developerPayload);
    }

    static consumePurchase(productId) {
      return InAppBillingBridge.consumePurchase(productId);
    }

    static subscribe(productId, developerPayload) {
      return InAppBillingBridge.subscribe(productId, developerPayload);
    }

    static updateSubscription(oldProductIds, productId) {
      return InAppBillingBridge.updateSubscription(oldProductIds, productId)
    }

    static isSubscribed(productId) {
      return InAppBillingBridge.isSubscribed(productId);
    }

    static isPurchased(productId) {
      return InAppBillingBridge.isPurchased(productId);
    }

    static listOwnedProducts() {
      return InAppBillingBridge.listOwnedProducts();
    }

    static listOwnedSubscriptions() {
      return InAppBillingBridge.listOwnedSubscriptions();
    }

    static getProductDetails(productId) {
      return InAppBillingBridge.getProductDetails([productId])
        .then((arr) => {
          if (arr != null && arr.length > 0) {
            return Promise.resolve(arr[0]);
          } else {
            return Promise.reject("Could not find details.");
          }
        })
        .catch((error) => {
          return Promise.reject(error);
        });
    }

    static getPurchaseTransactionDetails(productId, openChannel) {
        if (openChannel) {
            return InAppBillingBridge.open()
                .then(() => InAppBillingBridge.getPurchaseTransactionDetails(productId));
        } else {
            return InAppBillingBridge.getPurchaseTransactionDetails(productId);
        }
    }

    static getSubscriptionTransactionDetails(productId) {
      return InAppBillingBridge.getSubscriptionTransactionDetails(productId);
    }

    static getProductDetailsArray(productIds) {
      return InAppBillingBridge.getProductDetails(productIds);
    }

    static getSubscriptionDetails(productId) {
      return InAppBillingBridge.getSubscriptionDetails([productId])
        .then((arr) => {
          if (arr != null && arr.length > 0) {
            return Promise.resolve(arr[0]);
          } else {
            return Promise.reject("Could not find details.");
          }
        })
        .catch((error) => {
          return Promise.reject(error);
        });
    }

    static getSubscriptionDetailsArray(productIds) {
      return InAppBillingBridge.getSubscriptionDetails(productIds);
    }
}

module.exports = InAppBilling;
