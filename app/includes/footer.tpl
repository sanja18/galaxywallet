<footer role="contentinfo" aria-label="footer" ng-controller='footerCtrl' >

  <div class="container">

    <section class="row"><section class="row">

      <div class="col-sm-3 footer-1">
        <div class="well well-round well-sm">
            <p aria-hidden="true"><a href="https://dbix.io/"><img src="images/logo6.png" height="55px" width="auto" alt="Dbix Wallet" /></a></p>
        </div>
        <p><span translate="FOOTER_1">Open-Source, client-side tool for easily & securely interacting with the Dbix network.</span></p>
        <br />
        <p><a role="link" tabindex="0" data-toggle="modal" data-target="#disclaimerModal" translate="FOOTER_4"> Disclaimer </a></p>
      </div>

      <div class="col-sm-6 footer-2">
        <h5><i aria-hidden="true">💝</i> Donate</h5>
        <ul><li>
          <p>Galaxy is based on <a href='https://myetherwallet.com' target='_blank'>MyEtherWallet</a>, and is developed/maintained by the Dbix development team. You can support Galaxy DBIX Devs or the MEW devs by donating :</p>
        </li>
        <li>DBIX to Devs: <strong>0x850E9db4111172C57A7F8528b57f623811dcA638</strong></li>
        <li>ETH to MEW : <strong>0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8</strong></li>
        
        </ul>
      </div>

      <div class="col-sm-3 footer-3">
        <h5><i aria-hidden="true">🌎</i> On the Web</h5>
        <ul>
          <li><a aria-label="my ether wallet.com" href="https://dbix.io" target="_blank" style="">Galaxy</a></li>
          <li><a aria-label="my ether wallet github" href="https://github.com/ArabianChain/galaxywallet" target="_blank">Github: Galaxy</a></li>
          <li><a aria-label="twitter" href="https://twitter.com/arabianchain" target="_blank">Twitter</a></li>
          <li><a aria-label="medium" href="https://medium.com/@arabianchain" target="_blank">Blog</a></li>
          <li><a aria-label="slack" href="https://arabianchain.slack.com" target="_blank">Slack</a></li>
        </ul>
      </div>

    </section></section>

    <p ng-show="showBlocks" class="text-right" style="font-size: 20px; color: #f7a831;">Latest Block#: {{currentBlockNumber}}</p>

  </div>

  @@if (site === 'mew' ) { @@include( './footer-disclaimer-modal.tpl',   { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './footer-disclaimer-modal.tpl',   { "site": "cx"  } ) }


</footer>
</main>
</body>
</html>
