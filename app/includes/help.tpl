<!-- Help -->
<article class="tab-pane help active" ng-if="globalService.currentTab==globalService.tabs.help.id"  ng-cloak>

  <h1 translate="NAV_Help"> Help </h1>

  <article class="collapse-container">
    <div ng-click="hRemind = !hRemind">
      <a class="collapse-button"><span ng-show="hRemind">+</span><span ng-show="!hRemind">-</span></a>
      <h4 translate="HELP_Remind_Title"> Some reminders </h4>
    </div>
    <div ng-show="!hRemind">
      <ul>
        <li translate="HELP_Remind_Desc_1">**Dbix, Galaxy & Galaxy CX, and some of the underlying Javascript libraries we use are under active development.** While we have thoroughly tested & tens of thousands of wallets have been successfully created by people all over the globe, there is always the remote possibility that something unexpected happens that causes your DBIX to be lost. Please do not invest more than you are willing to lose, and please be careful. If something were to happen, we are sorry, but we are not responsible for the lost DBIX.</li>
        <li translate="HELP_Remind_Desc_2">Galaxy & Galaxy CX are not "web wallets". You do not create an account or give us your DBIX to hold onto. All data never leaves your computer/your browser. We make it easy for you to create, save, and access your information and interact with the blockchain.</li>
        <li translate="HELP_Remind_Desc_3">If you do not save your private key & password, there is no way to recover access to your wallet or the funds it holds.  Back them up in multiple physical locations &ndash; not just on your computer!</li>
      </ul>
    </div>
  </article>



  <article class="collapse-container">
    <div ng-click="h0 = !h0">
      <a class="collapse-button" ><span ng-show="!h0">+</span><span ng-show="h0">-</span></a>
      <h4 translate="HELP_0_Title"> 0. I'm new. What do I do? </h4>
    </div>
    <div ng-show="h0">
      <p translate="HELP_0_Desc_1"> Galaxy gives you the ability to generate new wallets so you can store your DBIX yourself, not on an exchange. This process happens entirely on your computer, not our servers. Therefore, when you generate a new wallet, **you are responsible for safely backing it up**.</p>
      <ol>
        <li translate="HELP_0_Desc_2"> Create a new wallet. </li>
        <li translate="HELP_0_Desc_3"> Back the wallet up. </li>
        <li translate="HELP_0_Desc_4"> Verify you have access to this new wallet and have correctly saved all necessary information. </li>
        <li translate="HELP_0_Desc_5"> Transfer DBIX to this new wallet. </li>
      </ol>
    </div>
  </article>



  <article class="collapse-container">
    <div ng-click="h1 = !h1">
      <a class="collapse-button" ><span ng-show="!h1">+</span><span ng-show="h1">-</span></a>
      <h4 translate="HELP_1_Title"> 1. How do I create a new wallet? </h4>
    </div>
    <div ng-show="h1">
      <ol>
        @@if (site === 'mew' ) {
        <li translate="HELP_1_Desc_1"> Go to the "Create New DBIX Account" page. </li>
        }
        @@if (site === 'cx' )  {
        <li translate="HELP_1_Desc_2"> Go to the "Add Wallet" page & select "Create New DBIX Account" </li>
        }
        <li translate="HELP_1_Desc_3"> Enter a strong password. If you think you may forget it, save it somewhere safe. You will need this password to send transactions. </li>
        <li translate="HELP_1_Desc_4"> Click "Create New DBIX Account". </li>
        <li translate="HELP_1_Desc_5"> Your wallet has now been generated. </li>
      </ol>
    </div>
  </article>



  <article class="collapse-container">
    <div ng-click="h2a = !h2a">
      <a class="collapse-button" ><span ng-show="!h2a">+</span><span ng-show="h2a">-</span></a>
      <h4 translate="HELP_2a_Title"> 2. How do I save/backup my wallet? </h4>
    </div>
    <div ng-show="h2a">
      <p translate="HELP_2a_Desc_1"> You should always back up your wallet externally and in multiple physical locations - like on a USB drive and/or a piece of paper. </p>
      <ol>
        <li translate="HELP_2a_Desc_2"> Save the address. You can keep it to yourself or share it with others. That way, others can transfer DBIX to you. </li>
        <li translate="HELP_2a_Desc_3"> Save versions of the private key. Do not share it with anyone else. Your private key is necessary when you want to access your DBIX to send it! There are 3 types of private keys: </li>

        <ul>
          <li><strong translate="x_Keystore">Keystore/JSON File (Recommended · Encrypted · Dbixwall/Gdbix Format):</strong> <span translate="x_KeystoreDesc">This Keystore / JSON file matches the format used by Dbixwall & Gdbix so you can easily import it in the future. It is the recommended file to download and back up.</span></li>
          <li><strong translate="x_Json">JSON File (unencrypted):</strong> <span translate="x_JsonDesc">This is the unencrypted, JSON format of your private key. This means you do not need the password but anyone who finds your JSON can access your wallet & DBIX without the password.</span></li>
          <li><strong translate="x_PrivKey">Private Key (unencrypted):</strong> <span translate="x_PrivKeyDesc">This is the unencrypted text version of your private key, meaning no password is necessary. If someone were to find your unencrypted private key, they could access your wallet without a password. For this reason, encrypted versions are typically recommended.</span></li>
        </ul>

        <li translate="HELP_2a_Desc_4"> Place your address, versions of the private key, and the PDF version of your paper wallet in a folder. Save this on your computer and a USB drive.</li>
        <li translate="HELP_2a_Desc_5"> Print the wallet if you have a printer. Otherwise, write down your private and address on a piece of paper. Store this as a secure location, separate from your computer and the USB drive.</li>
        <li translate="HELP_2a_Desc_6">Keep in mind, you must prevent loss of the keys and password due to loss or failure of you hard drive failure, or USB drive, or piece of paper. You also must keep in mind physical loss / damage of an entire area (think fire or flood).</li>
      </ol>
    </div>
  </article>



@@if (site === 'mew' ) {
  <article class="collapse-container">
    <div ng-click="h2b = !h2b">
      <a class="collapse-button" ><span ng-show="!h2b">+</span><span ng-show="h2b">-</span></a>
      <h4 translate="HELP_2b_Title"> 3. How do I safely / offline / cold storage with Galaxy? </h4>
    </div>
    <div ng-show="h2b">
      <ol>
        <li translate="HELP_2b_Desc_1"> Go to our github: [https://github.com/ArabianChain/galaxywallet/tree/gh-pages](https://github.com/ArabianChain/galaxywallet/tree/gh-pages). </li>
        <li translate="HELP_2b_Desc_2"> Click download zip in the upper right. </li>
        <li translate="HELP_2b_Desc_3"> Move zip to an airgapped computer. </li>
        <li translate="HELP_2b_Desc_4"> Unzip it and double-click index.html. </li>
        <li translate="HELP_2b_Desc_5"> Generate a wallet with a strong password. </li>
        <li translate="HELP_2b_Desc_6"> Save the address. Save versions of the private key. Save the password if you might not remember it forever. </li>
        <li translate="HELP_2b_Desc_7"> Store these papers / USBs in multiple physically separate locations. </li>
        <li translate="HELP_2b_Desc_8"> Go to the "View Wallet Info" page and type in your private key / password to ensure they are correct and access your wallet. Check that the address you wrote down is the same. </li>
      </ol>
      <p translate="HELP_2a_Desc_6">Keep in mind, you must prevent loss of the keys and password due to loss or failure of you hard drive failure, or USB drive, or piece of paper. You also must keep in mind physical loss / damage of an entire area (think fire or flood).</p>
    </div>
  </article>
}



  <article class="collapse-container">
    <div ng-click="h3 = !h3">
      <a class="collapse-button" ><span ng-show="!h3">+</span><span ng-show="h3">-</span></a>
      <h4 translate="HELP_3_Title"> 4. How do I verify I have access to my new wallet? </h4>
    </div>
    <div ng-show="h3">
      <p translate="HELP_3_Desc_1">**Before you send any DBIX to your new wallet**, you should ensure you have access to it.</p>
      <ol>
        @@if (site === 'mew' ) {
        <li translate="HELP_3_Desc_2"> Navigate to the "View Wallet Info" page. </li>
        }
        @@if (site === 'cx' )  {
        <li translate="HELP_3_Desc_3"> Navigate to the Galaxy "View Wallet Info" page. </li>
        }
        <li translate="HELP_3_Desc_4"> Select your wallet file -or- your private key and unlock your wallet. </li>
        <li translate="HELP_3_Desc_5"> If the wallet is encrypted, a text box will automatically appear. Enter the password. </li>
        <li translate="HELP_3_Desc_6"> Click the "Unlock Wallet" button. </li>
        <li translate="HELP_3_Desc_7"> Your wallet information should show up. Find you account address, next to a colorful, circular icon. This icon visually represents your address. Be certain that the address is the address you have saved to your text document and is on your paper wallet. </li>
        <li translate="HELP_3_Desc_8"> If you are planning on holding a large amount of DBIX, we recommend that send a small amount of DBIX from new wallet before depositting a large amount. Send .001 DBIX to your new wallet, access that wallet, send that .001 DBIX to another address, and ensure everything works smoothly. </li>
      </ol>
   </div>
  </article>



@@if (site === 'mew' ) {
  <article class="collapse-container">
    <div ng-click="h4 = !h4">
      <a class="collapse-button" ><span ng-show="!h4">+</span><span ng-show="h4">-</span></a>
      <h4 translate="HELP_4_Title"> 5. How do I send DBIX from one wallet to another? </h4>
    </div>
    <div ng-show="h4">
      <p translate="HELP_4_Desc_1">If you plan to move a large amount of ether, you should test sending a small amount to your wallet first to ensure everything goes as planned.</p>
      <ol>
        <li translate="HELP_4_Desc_2"> Navigate to the "Send DBIX" page. </li>
        <li translate="HELP_4_Desc_3"> Select your wallet file -or- your private key and unlock your wallet.</li>
        <li translate="HELP_4_Desc_4"> If the wallet is encrypted, a text box will automatically appear. Enter the password. </li>
        <li translate="HELP_4_Desc_5"> Click the "Unlock Wallet" button. </li>
        <li translate="HELP_4_Desc_6"> Enter the address you would like to send to in the "To Address:" field. </li>
        <li translate="HELP_4_Desc_7"> Enter the amount you would like to send. You can also click the "Transfer total available balance" link if you would like the transfer the entire balance. </li>
        <li translate="HELP_4_Desc_9"> Click "Generate Transaction". </li>
        <li translate="HELP_4_Desc_10"> A couple more fields will appear. This is your browser generating the transaction. </li>
        <li translate="HELP_4_Desc_11"> Click the blue "Send Transaction" button below that. </li>
        <li translate="HELP_4_Desc_12"> A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button. </li>
        <li translate="HELP_4_Desc_13"> The transaction will be submitted. The TX ID will display. You can click that TX ID to see it on the blockchain. </li>
      </ol>
    </div>
  </article>
}



@@if (site === 'cx' ) {
  <article class="collapse-container">
    <div ng-click="h4cx = !h4cx">
      <a class="collapse-button" ><span ng-show="!h4cx">+</span><span ng-show="h4cx">-</span></a>
      <h4 translate="HELP_4CX_Title">4. How do I send DBIX using Galaxy CX? </h4>
    </div>
    <div ng-show="h4cx">
      <p translate="HELP_4CX_Desc_1">First, you need to add a wallet. Once you have done that, you have 2 options: the "QuickSend" functionality from the Chrome Extension icon or the "Send DBIX" page.</p>
      <p translate="HELP_4CX_Desc_2" class="strong"> QuickSend: </p>
      <ol>
        <li translate="HELP_4CX_Desc_3"> Click the Chrome Extension Icon. </li>
        <li translate="HELP_4CX_Desc_4"> Click the "QuickSend" button. </li>
        <li translate="HELP_4CX_Desc_5"> Select the wallet you wish to send from. </li>
        <li translate="HELP_4CX_Desc_6"> Enter the address you would like to send to in the "To Address:" field. </li>
        <li translate="HELP_4CX_Desc_7"> Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance.</li>
        <li translate="HELP_4CX_Desc_8"> Click "Send Transaction". </li>
        <li translate="HELP_4CX_Desc_9"> Verify the address and the amount you are sending is correct. </li>
        <li translate="HELP_4CX_Desc_10"> Enter the password for that wallet. </li>
        <li translate="HELP_4CX_Desc_11"> Click "Send Transaction." </li>
      </ol>
      <p class="strong" translate="HELP_4CX_Desc_12"> Using "Send DBIX" Page: </p>
      <ol>
        <li translate="HELP_4_Desc_2"> Navigate to the "Send DBIX" page. </li>
        <li translate="HELP_4_Desc_3"> Select your wallet file -or- your private key and unlock your wallet.</li>
        <li translate="HELP_4_Desc_4"> If the wallet is encrypted, a text box will automatically appear. Enter the password. </li>
        <li translate="HELP_4_Desc_5"> Click the "Unlock Wallet" button. </li>
        <li translate="HELP_4_Desc_6"> Enter the address you would like to send to in the "To Address:" field. </li>
        <li translate="HELP_4_Desc_7"> Enter the amount you would like to send. You can also click the "Transfer total available balance" link if you would like the transfer the entire balance. </li>
        <li translate="HELP_4_Desc_9"> Click "Generate Transaction" Button. </li>
        <li translate="HELP_4_Desc_10"> A couple more fields will appear. This is your browser generating the transaction. </li>
        <li translate="HELP_4_Desc_11"> Click the blue "Send Transaction" button below that. </li>
        <li translate="HELP_4_Desc_12"> A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button. </li>
        <li translate="HELP_4_Desc_13"> The transaction will be submitted. The TX ID will display. You can click that TX ID to see it on the blockchain. </li>
      </ol>
    </div>
  </article>
}



@@if (site === 'mew' ) {
  <article class="collapse-container">
    <div  ng-click="h5 = !h5">
      <a class="collapse-button"><span ng-show="!h5">+</span><span ng-show="h5">-</span></a>
      <h4 translate="HELP_5_Title">6. How do I run Galaxy offline/locally? </h4>
    </div>
    <div ng-show="h5">
    <p translate="HELP_5_Desc_1"> You can run Galaxy on your computer instead of from the GitHub servers. You can generatea a wallet completely offline and send transactions from the "Offline Transaction" page. </p>
    <ol>
      <li translate="HELP_2b_Desc_1">Go to https://github.com/ArabianChain/galaxywallet/releases/latest:</li>
      <li translate="HELP_2b_Desc_2">Click the file below that looks like dist-vX.X.X.zip</li>
      <li translate="HELP_2b_Desc_3">Move zip to an airgapped computer.</li>
      <li translate="HELP_2b_Desc_4">Unzip it and double-click `index.html`.</li>
      <li translate="HELP_5_Desc_7">Galaxy is now running entirely on your computer.</li>
    </ol>
    <p translate="HELP_5_Desc_8"> In case you are not familiar, you need to keep the entire folder in order to run the website, not just index.html. Don't touch or move anything around in the folder. If you are storing a backup of the Galaxy repo for the future, we recommend just storing the ZIP so you can be sure the folder contents stay intact.</p>
    <p translate="HELP_5_Desc_9"> As we are constantly updating Galaxy, we recommend you periodically update your saved version of the repo. </p>
    </div>
  </article>
}



@@if (site === 'cx' ) {
  <article class="collapse-container">
    <div ng-click="h5cx = !h5cx">
      <a class="collapse-button" ><span ng-show="!h5cx">+</span><span ng-show="h5cx">-</span></a>
      <h4 translate="HELP_5CX_Title">5. How can I install this extension from the repo instead of the Chrome Store? </h4>
    </div>
    <div ng-show="h5cx">
    <ul>
      <li translate="HELP_2b_Desc_1"> Go to [https://github.com/ArabianChain/galaxywallet/releases/latest](https://github.com/ArabianChain/galaxywallet/releases/latest).</li>
      <li translate="HELP_5CX_Desc_2"> Download the file below that looks like `chrome-extension-vX.X.X.zip` and unzip it.</li>
      <li translate="HELP_5CX_Desc_3"> Go to Google Chrome and find you settings (in the menu in the upper right).</li>
      <li translate="HELP_5CX_Desc_4"> Click "Extensions" on the left. </li>
      <li translate="HELP_5CX_Desc_5"> Check the "Developer Mode" button at the top of that page. </li>
      <li translate="HELP_5CX_Desc_6"> Click the "Load unpacked extension..." button. </li>
      <li translate="HELP_5CX_Desc_7"> Navigate to the now-unzipped folder that you downloaded earlier. Click "select". </li>
      <li translate="HELP_5CX_Desc_8"> The extension should now show up in your extensions and in your Chrome Extension bar. </li>
    </ul>
    </div>
  </article>
}

  <article class="collapse-container">
    <div ng-click="h6 = !h6">
      <a class="collapse-button" ><span ng-show="!h6">+</span><span ng-show="h6">-</span></a>
      <h4 class="text-danger">7) I cannot connect to my custom node. What do I do? </h4>
    </div>
    <div ng-show="h6">
      <ul>
        <li> Verify the URL you entered is correct. </li>
        <li> Verify the port you entered is correct. </li>
        <li> Verify that if you are connecting to an http:// node you are running Galaxy locally (NOT over https://). </li>
        <li> Verify gdbix is running with <code>gdbix --rpc --rpcport 7565 --rpccorsdomain "null" </code></li>
        <li> Verify your node is actually up and running. </li>
        <li> Try removing the node and adding it again. </li>
      </ul>
    </div>
  </article>


  <article class="collapse-container">
    <div ng-click="h7 = !h7">
      <a class="collapse-button" ><span ng-show="!h7">+</span><span ng-show="h7">-</span></a>
      <h4 translate="HELP_7_Title">8. How do I send Tokens & add custom tokens? </h4>
    </div>
    <div ng-show="h7">
      <ol>
        <li translate="HELP_7_Desc_1"> Navigate to the "Send Token" page. </li>
        <li translate="HELP_7_Desc_2"> Unlock your wallet. </li>
        <li translate="HELP_7_Desc_3"> Enter the address you would like to send to in the "To Address:" field. </li>
        <li translate="HELP_7_Desc_4"> Enter the amount you would like to send.</li>
        <li translate="HELP_7_Desc_5"> Select which token you would like to send. </li>
        <li translate="HELP_7_Desc_6"> If you do not see the token listed:</li>
        <ol>
          <li translate="HELP_7_Desc_7">Click "Custom".</li>
          <li translate="HELP_7_Desc_8">Enter the address, name, and decimals of the token. These are provided by the developers.</li>
          <li translate="HELP_7_Desc_9"> Click "Save". </li>
          <li translate="HELP_7_Desc_10"> You can now send that token as well as see it's balance in the sidebar. </li>
        </ol>
        <li translate="HELP_7_Desc_11"> Click "Generate Transaction". </li>
        <li translate="HELP_7_Desc_12"> A couple more fields will appear. This is your browser generating the transaction. </li>
        <li translate="HELP_7_Desc_13"> Click the blue "Send Transaction" button below that. </li>
        <li translate="HELP_7_Desc_14"> A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button. </li>
        <li translate="HELP_7_Desc_15"> The transaction will be submitted. The TX ID will display. You can click that TX ID to see it on the blockchain. </li>
      </ol>
    </div>
  </article>



@@if (site === 'mew' ) {
  <article class="collapse-container">
    <div ng-click="h8 = !h8">
      <a class="collapse-button"><span ng-show="!h8">+</span><span ng-show="h8">-</span></a>
      <h4 translate="HELP_8_Title">9. What happens if your site goes down? </h4>
    </div>
    <div ng-show="h8">
      <p translate="HELP_8_Desc_1">Galaxy is not a web wallet. You don't have a login and nothing ever gets saved to our servers. It is simply an interface that allows you interact with the blockchain.</p>
      <p translate="HELP_8_Desc_2">If Galaxy goes down, you would have to find another way (like gdbix or Dbix Wallet / Dbixwall) to do what we are doing. But you wouldn't have to "get" your DBIX out of Galaxy because it's not in Galaxy. It's in whatever wallet your generated via our site.</p>
      <p translate="HELP_8_Desc_3"> You can import your unencrypted private key and your Gdbix/Dbixwall Format (encrypted) files directly into gdbix / Dbix Wallet very easily now. See question #10 below. </p>
    </div>
  </article>
}



@@if (site === 'cx' ) {
  <article class="collapse-container">
    <div  ng-click="h8cx = !h8cx">
      <a class="collapse-button"><span ng-show="!h8cx">+</span><span ng-show="h8cx">-</span></a>
      <h4 translate="HELP_8CX_Title">8. What happens if Galaxy CX disappears? </h4>
    </div>
    <div ng-show="h8cx">
      <p translate="HELP_8CX_Desc_1">First, all data is saved on your computer, not our servers. I know it can be confusing, but when you look at the Chrome Extension, you are NOT looking at stuff saved on our servers somewhere - it's all saved on your own computer.</p>
      <p translate="HELP_8CX_Desc_2"> That said, it is **very important** that you back up all your information for any new wallets generated with Galaxy CX. That way if anything happens to Galaxy CX or your computer, you still have all the information necessary to access your DBIX. See the #2a for how to back up your wallets.</p>
      <p translate="HELP_8CX_Desc_3"> If for some reason Galaxy CX disappears from the Chrome Store, you can find the source on Github and load it manually. See #5 above.</p>
    </div>
  </article>
}



  <article class="collapse-container">
    <div ng-click="h9 = !h9">
      <a class="collapse-button" ><span ng-show="!h9">+</span><span ng-show="h9">-</span></a>
      <h4 translate="HELP_9_Title">10. Is using the send transaction offline? </h4>
    </div>
    <div ng-show="h9">
      <p translate=HELP_9_Desc_1> No, the send transaction page is not offline. It needs the internet in order to get the current gas price, nonce of your account, and broadcast the transaction (aka "send"). However, it only sends the signed transaction. Your private key safely stays with you. We also now provide an "Offline Transaction" page so that you can ensure your private keys are on an offline/airgapped computer at all times.</p>
    </div>
  </article>




  <article class="collapse-container">
    <div ng-click="h10 = !h10">
      <a class="collapse-button" ><span ng-show="!h10">+</span><span ng-show="h10">-</span></a>
      <h4 translate="HELP_10_Title">11. How do I make an offline transaction?</h4>
    </div>
    <div ng-show="h10">
      <ol>
        <li translate="HELP_10_Desc_1"> Navigate to the "Offline Transaction" page via your online computer.</li>
        <li translate="HELP_10_Desc_2"> Enter the "From Address". Please note, this is the address you are sending FROM, not TO. This generates the nonce and gas price.</li>
        <li translate="HELP_10_Desc_3"> Move to your offline computer. Enter the "TO ADDRESS" and the "AMOUNT" you wish to send.</li>
        <li translate="HELP_10_Desc_4"> Enter the "GAS PRICE" as it was displayed to you on your online computer in step #1.</li>
        <li translate="HELP_10_Desc_5"> Enter the "NONCE" as it was displayed to you on your online computer in step #1.</li>
        <li translate="HELP_10_Desc_6"> The "GAS LIMIT" has a default value of 21000. This will cover a standard transaction. If you are sending to a contract or are including additional data with your transaction, you will need to increase the gas limit. Any excess gas will be returned to you.</li>
        <li translate="HELP_10_Desc_7"> If you wish, enter some data. If you enter data, you will need to include more than the 21000 default gas limit. All data is in HEX format.</li>
        <li translate="HELP_10_Desc_8"> Select your wallet file -or- your private key and unlock your wallet.</li>
        <li translate="HELP_10_Desc_9"> Press the "GENERATE SIGNED TRANSACTION" button.</li>
        <li translate="HELP_10_Desc_10"> The data field below this button will populate with your signed transaction. Copy this and move it back to your online computer. </li>
        <li translate="HELP_10_Desc_11"> On your online computer, paste the signed transaction into the text field in step #3 and click "SEND DBIX". This will broadcast your transaction.</li>
      </ol>
    </div>
  </article>



  <article class="collapse-container">
    <div ng-click="h12 = !h12">
      <a class="collapse-button" ><span ng-show="!h12">+</span><span ng-show="h12">-</span></a>
      <h4 translate="HELP_12_Title">12. How do I import a wallet created with Galaxy into Dbixwall?</h4>
    </div>
    <div ng-show="h12">
      <p class="strong" translate="HELP_12_Desc_1"> Using an Dbixwall JSON file from Galaxy v2+....</p>
      <ol>
        @@if (site === 'mew' ) {
          <li translate="HELP_12_Desc_2"> Go to the "View Wallet Info" page.</li>
          <li translate="HELP_12_Desc_3"> Unlock your wallet using your **encrypted** private key or JSON file. </li>
        }
        @@if (site === 'cx' ) {
          <li translate="HELP_12_Desc_4"> Go to the "My Wallets" page.</li>
          <li translate="HELP_12_Desc_5"> Select the wallet you want to import into Dbixwall, click the "View" icon, enter your password, and access your wallet. </li>
        }
        <li translate="HELP_12_Desc_6"> Find the "Download JSON file - Gdbix/Dbixwall Format (encrypted)" section. Press the "Download" button below that. You now have your keystore file.</li>
        <li translate="HELP_12_Desc_7"> Open the Dbixwall application. </li>
        <li translate="HELP_12_Desc_8"> In the menu bar, go "Accounts" -> "Backup" -> "Accounts"</li>
        <li translate="HELP_12_Desc_9"> This will open your keystore folder. Copy the file you just downloaded (<code>UTC--2016-04-14........</code>) into that keystore folder.</li>
        <li translate="HELP_12_Desc_10"> Your account should show up immediately under "Accounts." </li>
      </ol>

      <p class="strong" translate="HELP_12_Desc_11">Using your unencrypted private key...</p>
      <ol>
        <li translate="HELP_12_Desc_12"> If you do not already have your unencrypted private key, navigate to the "View Wallet Details" page.</li>
        <li translate="HELP_12_Desc_13"> Select your wallet file -or- enter/paste your private key to unlock your wallet.</li>
        <li translate="HELP_12_Desc_14"> Copy Your Private Key (unencrypted). </li>
        <li translate="HELP_12_Desc_15"> If you are on a Mac:</li>
          <ul>
            <li translate="HELP_12_Desc_16"> Open Text Edit and paste this private key.</li>
            <li translate="HELP_12_Desc_17"> Go to the menu bar and click "Format" -> "Make Plain Text".</li>
            <li translate="HELP_12_Desc_18"> Save this file to your <code>desktop</code> as <code>nothing_special_delete_me.txt</code>. Make sure it says "UTF-8" and "If no extension is provided use .txt" in the save dialog. </li>
            <li translate="HELP_12_Desc_19"> Open terminal and run the following command: <code>gdbix account import ~/Desktop/nothing_special_delete_me.txt</code></li>
            <li translate="HELP_12_Desc_20"> This will prompt you to make a new password. This is the password you will use in gdbix / Dbixwall whenever you send a transaction, so don't forget it. </li>
            <li translate="HELP_12_Desc_21"> After successful import, delete <code>nothing_special_delete_me.txt</code></li>
            <li translate="HELP_12_Desc_22"> The next time you open the Dbix Wallet application, your account will be listed under "Accounts". </li>
          </ul>
        <li translate="HELP_12_Desc_15b"> If you are on a PC:</li>
          <ul>
            <li translate="HELP_12_Desc_23"> Open Notepad & paste the private key</li>
            <li translate="HELP_12_Desc_24"> Save the file as <code>nothing_special_delete_me.txt</code> at <code>C:\</code></li>
            <li translate="HELP_12_Desc_25"> Run the command, <code>gdbix account import C:\nothing_special_delete_me.txt</code></li>
            <li translate="HELP_12_Desc_26"> This will prompt you to make a new password. This is the password you will use in gdbix / Dbixwall whenever you send a transaction, so don't forget it.</li>
            <li translate="HELP_12_Desc_27"> After successful import, delete <code>nothing_special_delete_me.txt</code></li>
            <li translate="HELP_12_Desc_28"> The next time you open the Dbixwall application, your account will be listed under "Accounts". </li>
          </ul>
        </ol>
    </div>
  </article>



  <article class="collapse-container">
    <div ng-click="h13 = !h13">
      <a class="collapse-button" ><span ng-show="!h13">+</span><span ng-show="h13">-</span></a>
        <h4 translate="HELP_13_Title">13. What does "Gas Limit Too Low" Mean?</h4>
      </div>
      <div ng-show="h13">
        <p translate="HELP_13_Desc_1"> Most likely, this means you are attempting to send DBIX to a contract. Sending to a contract requires a bit more data and therefore a bit more gas. On the "Send DBIX" page, click the "+ Advanced: Add More Gas or Data" button below the amount field. This will display two additional fields that you can use to increase the gas above the default 21000, or add data to your transaction. </p>
      </div>
  </article>



  <article class="collapse-container">
    <div ng-click="h14 = !h14" >
      <a class="collapse-button"><span ng-show="!h14">+</span><span ng-show="h14">-</span></a>
        <h4 translate="HELP_14_Title"> 14. Some sites randomize (seed) the private key generation via mouse movements. Galaxy doesn't do this. Is the random number generation for Galaxy safe?</h4>
      </div>
      <div ng-show="h14">
        <p translate="HELP_14_Desc_1">While the mouse moving thing is clever and we understand why people like it, the reality is window.crypto ensures more entropy than your mouse movements. The mouse movements aren't unsafe, it's just that we (and tons of other crypto experments) believe in window.crypto. In addition, Galaxy can be used on touch devices. Here's a <a href="https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm" target="_blank">conversation between an angry redditor and Vitalik Buterin regarding mouse movements v. window.crypto</a> and here is the <a href="https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto" target="_blank">the window.crypto w3 spec</a>.</p>
    </div>
  </article>



  <article class="collapse-container">
    <div ng-click="h15 = !h15">
      <a class="collapse-button" ><span ng-show="!h15">+</span><span ng-show="h15">-</span></a>
        <h4 translate="HELP_15_Title">15. Why hasn't the wallet I just created show up in the blockchain explorer?</h4>
      </div>
      <div ng-show="h15">
        <p translate="HELP_15_Desc_1"> Addresses will only show up in a blockchain explorer once the account has activity on it&mdash;for example, once you have transferred some DBIX to it. </p>
    </div>
  </article>



  <article class="collapse-container">
    <div ng-click="h16 = !h16">
      <a class="collapse-button" ><span ng-show="!h16">+</span><span ng-show="h16">-</span></a>
        <h4 translate="HELP_16_Title">16. How do I check the balance of my account? </h4>
      </div>
      <div ng-show="h16">
        <p translate="HELP_16_Desc_1"> You can use a blockchain explorer like <a href="http://dbixscan.io/" target="_blank">dbixscan.io</a>. Paste your address into the search bar and it will pull up your address and transaction history.</p>
    </div>
  </article>



  <article class="collapse-container">
    <div  ng-click="h17 = !h17">
      <a class="collapse-button"><span ng-show="!h17">+</span><span ng-show="h17">-</span></a>
        <h4 translate="HELP_17_Title">17. Why isn't my balance showing up when I unlock my wallet? </h4>
      </div>
      <div ng-show="h17">
        <p translate="HELP_17_Desc_1"> This is most likely due to the fact that you are behind a firewall. The API that we use to get the balance and convert said balance is often blocked by firewalls for whatever reason. You will still be able to send transactions, you just need to use a different method to see said balance, like dbixscan.io</p>
    </div>
  </article>



  <article class="collapse-container">
    <div ng-click="h18 = !h18">
      <a class="collapse-button" ><span ng-show="!h18">+</span><span ng-show="h18">-</span></a>
        <h4 translate="HELP_18_Title">18. Where is my gdbix wallet file? </h4>
      </div>
      <div ng-show="h18">
        <ul>
          <li>Mac: <code>~/Library/Dubaicoin/keystore</code></li>
          <li>Linux: <code>~/.dubaicoin/keystore</code></li>
          <li>Windows: <code>%APPDATA%/Dubaicoin/keystore</code></li>
        </ul>
    </div>
  </article>



  <article class="collapse-container">
    <div ng-click="h19 = !h19" >
      <a class="collapse-button" ><span ng-show="!h19">+</span><span ng-show="h19">-</span></a>
      <h4 translate="HELP_19_Title">19. Where is my Dbixwall file? </h4>
    </div>
    <div ng-show="h19">
      <p translate="HELP_19_Desc_1"> Dbixwall files are typically found in the file locations above.</p>
  </div>
  </article>

  <article class="collapse-container">
    <div ng-click="h21 = !h21">
      <a class="collapse-button" ><span ng-show="!h21">+</span><span ng-show="h21">-</span></a>
      <h4 translate="HELP_21_Title"> 20. Couldn't everybody put in random private keys, look for a balance, and send to their own address? </h4>
    </div>
    <div ng-show="h21">
      <p translate="HELP_21_Desc_1"> Short version: yes, but finding an account with a balance would take longer than the universe...so...no.</p>
      <p translate="HELP_21_Desc_2"> Long ELI5 Version: So Dbix is based on <a href="https://en.wikipedia.org/wiki/Public-key_cryptography" target="_blank">Public Key Cryptography</a>, specifically <a href="https://eprint.iacr.org/2013/734.pdf" target="_blank"> Elliptic curve cryptography </a> which is very widely used, not just in Dbix. Most servers are protected via ECC. Bitcoin uses the same, as well as SSH and TLS and a lot of other stuff. The Dbix keys specifically are 256-bit keys, which are stronger than 128-bit and 192-bit, which are also widely used and still considered secure by experts.</p>
      <p translate="HELP_21_Desc_3">In this you have a private key and a public key. The private key can derive the public key, but the public key cannot be turned back into the private key. The fact that the internet and the world’s secrets are using this cryptography means that if there is a way to go from public key to private key, your lost ETH is the least of everyone’s problems.</p>
      <p translate="HELP_21_Desc_4">Now, that said, YES if someone else has your private key then they can indeed send ETH from your account. Just like if someone has your password to your email, they can read and send your email, or the password to your bank account, they could make transfers. You could download the Keystore version of your private key which is the private key that is encrypted with a password. This is like having a password that is also protected by another password.</p>
      <p translate="HELP_21_Desc_5">And YES, in theory you could just type in a string of 64 hexadecimal characters until you got one that matched. In fact, smart people could write a program to very quickly check random private keys. This is known as "brute-forcing" or "mining" private keys. People have thought about this long and hard. With a few very high end servers, they may be able to check 1M+ keys / second. However, even checking that many per second would not yield access to make the cost of running those servers even close to worthwhile - it is more likely you, and your great-grandchildren, will die before getting a match.</p>
      <p translate="HELP_21_Desc_6">If you know anything about Bitcoin, <a href="http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver" target="_blank">this will put it in perspective:</a> *To illustrate how unlikely this is: suppose every satoshi of every bitcoin ever to be generated was sent to its own unique private keys. The probability that among those keys there could be two that would correspond to the same address is roughly one in 100 quintillion.*</p>
      <p translate="HELP_21_Desc_7"><a href="http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392" target="_blank">If you want something a bit more technical:</a> *These numbers have nothing to do with the technology of the devices; they are the maximums that thermodynamics will allow. And they strongly imply that brute-force attacks against 256-bit keys will be infeasible until computers are built from something other than matter and occupy something other than space.*</p>
      <p translate="HELP_21_Desc_8"> Of course, this all assumes that keys are generated in a truly random way & with sufficient entropy. The keys generated here meet that criteria, as do Dbixwall/gdbix. The Dbix wallets are all pretty good. Keys generated by brainwallets do not, as a person's brain is not capable of creating a truly random seed. There have been a number of other issues regarding lack of entropy or seeds not being generated in a truly random way in Bitcoin-land, but that's a separate issue that can wait for another day. </p>
      <hr />
    </div>
  </article>



@@if (site === 'cx' ) {
  <article class="collapse-container">
    <div ng-click="hSecCX = !hSecCX">
      <a class="collapse-button" ><span ng-show="!hSecCX">+</span><span ng-show="hSecCX">-</span></a>
      <h4 translate="HELP_SecCX_Title">Security - Galaxy CX </h4>
    </div>
    <div ng-show="hSecCX">
      <h6 translate="HELP_SecCX_Desc_1"> Where is this extension saving my information?</h6>
      <p translate="HELP_SecCX_Desc_2"> The information you store in this Chrome Extension is saved via <a href="http://chrome.storage/" target="_blank">chrome.storage</a>. - this is the same place your passwords are saved when you save your password in Chrome. </p>

      <h6 translate="HELP_SecCX_Desc_3"> What information is saved? </h6>
      <p translate="HELP_SecCX_Desc_4"> The address, nickname, private key is stored in chrome.storage. The private key is encrypted using the password you set when you added the wallet. The nickname and wallet address is not encrypted. </p>
      <h6 translate="HELP_SecCX_Desc_5"> Why aren't the nickname and wallet address encrypted? </h6>
      <p translate="HELP_SecCX_Desc_6"> If we were to encrypt these items, you would need to enter a password each time you wanted to view your account balance or view the nicknames. If this concerns you, we recommend you use Galaxy instead of this Chrome Extension. </p>
    </div>
  </article>
}



  <article class="collapse-container">
    <div ng-click="hSec = !hSec">
      <a class="collapse-button" ><span ng-show="!hSec">+</span><span ng-show="hSec">-</span></a>
      <h4 translate="HELP_Sec_Title">Security </h4>
    </div>
    <div ng-show="hSec">
      <p translate="HELP_Sec_Desc_1"> If one of your first questions is "Why should I trust these people?", that is a good thing. Hopefully the following will help ease your fears. </p>
      <ul>
        <li translate="HELP_Sec_Desc_3">We aren't going to take your money or steal your private key(s). There is no malicious code on this site. In fact the "GENERATE WALLET" pages are completely client-side. That means that all the code is executed on ** your computer** and it is never saved and transmitted anywhere.</li>
        <li translate="HELP_Sec_Desc_4"> Check the URL -- This site is being served through GitHub and you can see the source code here: <a href="https://github.com/ArabianChain/galaxywallet/tree/gh-pages" target="_blank">https://github.com/ArabianChain/galaxywallet/tree/gh-pages</a> to the domains: <a href="http://kvhnuke.github.io/etherwallet/" target="_blank">http://kvhnuke.github.io/etherwallet/</a> and <a href="https://www.myetherwallet.com" target="_blank">https://www.myetherwallet.com</a>. You can verify it's hosted at GitHub by using <a href="http://viewdns.info/dnsrecord/?domain=myetherwallet.com" target="_blank">http://viewdns.info/dnsrecord/?domain=myetherwallet.com</a> - last two A record IPs are owned by GitHub for their custom domain hosting.</li>
        <li translate="HELP_Sec_Desc_5"> For generating wallets, you can download the <a href="https://github.com/ArabianChain/galaxywallet/tree/gh-pages">source code</a>. See #5 above.</li>
        <li translate="HELP_Sec_Desc_6"> Do a test run and check and see what network activity is happening. The easiest way for you to do this is to right click on the page and click "inspect element". Go to the "Network" tab. Generate a test wallet. You will see there is no network activity. You may see something happening that looks like data:image/gif and data:image/png. Those are the QR codes being generated...on your computer...by your computer. No bytes were transferred.</li>
        <li translate="HELP_Sec_Desc_8"> If you do not feel comfortable using this tool, then by all means, do not use it. We created this tool as a helpful way for people to generate wallets and make transactions without needing to dive into command line or run a full node. Again, feel free to reach out if you have concerns and we will respond as quickly as possible. Thanks! </li>
      </ul>
    </div>
  </article>



  


</article>
<!-- / Help -->

