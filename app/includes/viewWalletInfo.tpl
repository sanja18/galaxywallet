<!-- View Wallet Info Panel -->
<article class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.viewWalletInfo.id" ng-controller='viewWalletCtrl' ng-cloak>

  <article class="collapse-container">
    <div ng-click="wd = !wd">
      <a class="collapse-button"><span ng-show="wd">+</span><span ng-show="!wd">-</span></a>

        <h1 translate="NAV_ViewWallet">View Wallet Details</h1>

    </div>
    <div ng-show="!wd">
        <p translate="VIEWWALLET_Subtitle">
          This page allows you to download different versions of private keys and re-print your paper wallet. You may want to do this in order to [import your account into Dbixwall](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). If you want to check your balance, we recommend using a blockchain explorer like <a href="http://dbixscan.io/" target="_blank">dbixscan.io</a>.
        </p>
        <wallet-decrypt-drtv></wallet-decrypt-drtv>
    </div>
  </article>



  <section class="row" ng-show="wallet!=null">

      @@if (site === 'cx' ) {  @@include( './viewWalletInfo-content.tpl', { "site": "cx" } )    }
      @@if (site === 'mew') {  @@include( './viewWalletInfo-content.tpl', { "site": "mew" } )   }

      <br /><hr />

      <div ng-show="wallet.type=='default'">
        @@if (site === 'cx' )  {
          <main ng-controller='signMsgCtrl' ng-show="wallet!=null">
            @@if (site === 'cx' ) {  @@include( './signMsg.tpl', { "site": "cx" } )    }
          </main>
        }
        @@if (site === 'mew' ) {
          <main class="tab-pane active" ng-show="wallet!=null" ng-controller='signMsgCtrl' >
            @@if (site === 'mew') {  @@include( './signMsg.tpl', { "site": "mew" } )   }
          </main>
        }


      </div>

    </section>



  </section>

</article>
<!-- / View Wallet Info Tab -->

