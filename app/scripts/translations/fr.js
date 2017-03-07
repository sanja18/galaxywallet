// French
'use strict';
var fr = function() {}
fr.code = 'fr';
fr.data = {
/* Misc */
x_ParityPhrase              : 'Phrase Parity ',

/* Node Switcher */
NODE_Title                  : 'Installer votre nœud personnalisé',
NODE_Subtitle               : 'Pour se connecter à un nœud local…',
NODE_Warning                : 'Votre nœud doit être en HTTPS pour vous y connecter via MyEtherWallet.com. Vous pouvez [téléccharger le repo MyEtherWallet et le lancer localement](https://github.com/kvhnuke/etherwallet/releases/latest) pour vous connecter à un nœud quelconque, ou obtenir un certificat SSL gratuit via [LetsEncrypt](https://letsencrypt.org/)',
NODE_Name                   : 'Nom du nœud',
NODE_Port                   : 'Port du nœud',
NODE_CTA                    : 'Sauvegarder et utiliser un nœud personnalisé',

/* Contracts */
x_Access                    : 'Accès ',
CONTRACT_Title              : 'Adresse de contrat ',
CONTRACT_Title_2            : 'Sélectionner un contrat existant ',
CONTRACT_Json               : 'Interface ABI / JSON ',
CONTRACT_Interact_Title     : 'Lecture / écriture de contrat ',
CONTRACT_Interact_CTA       : 'Sélectionnez une fonction ',
CONTRACT_ByteCode           : 'Bytecode ',
CONTRACT_Read               : 'LIRE ',
CONTRACT_Write              : 'ECRIRE ',

/* Swap / Exchange */
SWAP_rates                  : "Taux actuels ",
SWAP_init_1                 : "Je veux échanger ",
SWAP_init_2                 : " contre ", // "I want to swap my X ETH for X BTC"
SWAP_init_CTA               : "Allons-y ! ", // or "Continue"
SWAP_information            : "Vos informations ",
SWAP_send_amt               : "Montant à envoyer ",
SWAP_rec_amt                : "Montant à recevoir ",
SWAP_your_rate              : "Votre taux ",
SWAP_rec_add                : "Votre adresse de réception ",
SWAP_start_CTA              : "Commencer l'échange ",
SWAP_ref_num                : "Votre numéro de référence ",
SWAP_time                   : "Temps restant pour l'envoi ",
SWAP_progress_1             : "Ordre déclenché ",
SWAP_progress_2             : "En attente de vos ", // Waiting for your BTC...
SWAP_progress_3             : "reçu ! ", // ETH Received!
SWAP_progress_4             : "Envoi de vos {{orderResult.output.currency}} ",
SWAP_progress_5             : "Ordre exécuté ",
SWAP_order_CTA              : "Envoyer ", // Please send 1 ETH...
SWAP_unlock                 : "Déverrouillez votre portefeuille pour envoyer des ETH ou des tokens directement depuis cette page. ",

NAV_Swap                    : 'Échange ',

  






/* Navigation*/
NAV_AddWallet               : 'Ajouter un portefeuille ',
NAV_BulkGenerate            : 'Générer des portefeuilles par lots ',
NAV_Contact                 : 'Contact ',
NAV_Contracts               : 'Contrats ',
NAV_DeployContract          : 'Déployer un contrat ',
NAV_GenerateWallet          : 'Générer un portefeuille ',
NAV_Help                    : 'Aide ',
NAV_InteractContract        : 'Interact with Contract ',
NAV_Multisig                : 'Multisig ',
NAV_MyWallets               : 'Mes portefeuilles ',
NAV_Offline                 : 'Envoyer hors-ligne ',
NAV_SendEther               : 'Envoyer des Ether et des Tokens ',
NAV_SendTokens              : 'Envoyer des tokens ',
NAV_SignMsg                 : 'Signer un message ',
NAV_ViewWallet              : 'Visualiser un portefeuille ',
NAV_YourWallets             : 'Vos portefeuilles ',

/* General */
x_AddessDesc                : 'Aussi appelé "Numéro de compte" ou "Clé publique". C\'est ce que vous envoyez aux gens pour qu\'ils puissent vous envoyer des ether. Cette icone est une façon simple de reconnaitre votre adresse. ',
x_Address                   : 'Votre adresse ',
x_Cancel                    : 'Annuler ',
x_CSV                       : 'Fichier CSV (non-chiffré) ',
x_Download                  : 'Télécharger ',
x_Json                      : 'Fichier JSON (non-chiffré) ',
x_JsonDesc                  : 'C\'est la version non-chiffrée au format JSON de votre clé privée. Cela signifie que vous n\'avez pas besoin de votre mot de passe pour l\'utiliser mais que toute personne qui trouve ce JSON peut accéder à votre portefeuille et vos Ether sans mot de passe. ',
x_Keystore                  : 'Fichier Keystore (UTC / JSON · Recommandé · Chiffré) ',
x_Keystore2                 : 'Fichier Keystore (UTC / JSON) ',
x_KeystoreDesc              : 'Ce fichier Keystore utilise le même format que celui que Fusion, vous pouvez donc facilement l\'importer plus tard dans ces logiciels. C\'est le fichier que nous vous recommandons de télécharger et sauvegarder. ',
x_Ledger                    : 'Ledger Nano S ',
x_Mnemonic                  : 'Phrase mnémonique ',
x_Password                  : 'Mot de passe ',
x_Print                     : 'Imprimer un portefeuille papier ',
x_PrintDesc                 : 'Astuce : Cliquez sur Imprimer et sauvegardez le portefeuille papier comme un PDF, même si vous n\'avez pas d\'imprimante ! ',
x_PrintShort                : 'Imprimer ',
x_PrivKey                   : 'Clé privée (non-chiffrée) ',
x_PrivKey2                  : 'Clé privée ',
x_PrivKeyDesc               : 'C\'est la version textuelle non-chiffrée de votre clé privée, ce qui signifie qu\'aucun mot de passe n\'est nécessaire pour l\'utiliser. Si quelqu\'un venait à découvrir cette clé privée, il pourrrait accéder à votre portefeuille sans mot de passe. Pour cette raison, la version chiffrée de votre clé privée est recommandée. ',
x_Save                      : 'Sauvegarder ',
x_TXT                       : 'Fichier TXT (non-chiffré) ',
x_Wallet                    : 'Portefeuille ',

/* Header */
MEW_Warning_1               : 'Vérifiez toujours l\'URL avant d\'accéder à votre portefeuille ou de générer un nouveau portefeuille. Attentions aux sites de phishing ! ',
CX_Warning_1                : 'Assurez vous d\'avoir une **sauvegarde externe** de tout portefeuille que vous gérez ici. De nombreux événements peuvent vous faire perdre les données de cette extension Chrome, y compris la dédinstallation et la réinstallation de l\'extension. Cette extension est une manière d\'accéder facilement à vos portefeuilles, **pas** une façon de les sauvegarder. ',
MEW_Tagline                 : 'Portefeuille d\'Ether Open Source JavaScript côté client ',
CX_Tagline                  : 'Extension Chrome de portefeuille d\'Ether Open Source JavaScript côté client ',

/* Footer */
FOOTER_1                    : 'Un outil open source en Javascript s\'exécutant côté client pour générer des portefeuilles Ethereum et envoyer des transactions. ',
FOOTER_1b                   : 'Créé par ',
FOOTER_2                    : 'Donations extrêmement appréciées : ',
FOOTER_3                    : 'Génération de portefeuille côté client par ',
FOOTER_4                    : 'Avertissement ',

/* Sidebar */
sidebar_AccountInfo         : 'Informations du compte ',
sidebar_AccountAddr         : 'Addresse du compte ',
sidebar_AccountBal          : 'Solde du compte ',
sidebar_TokenBal            : 'Solde en tokens ',
sidebar_Equiv               : 'Valeur correspondante ',
sidebar_TransHistory        : 'Historique des transactions ',
sidebar_donation            : 'MyEtherWallet est un service gratuit et open source respectueux de votre vie privée et de votre sécurité. Plus nous recevons de donations, plus nous dédions du temps à développer de nouvelles fonctions, à écouter vos retours et à vous fournir ce dont vous avez besoin. Nous ne sommes que deux personnes qui essayent de changer le monde. Aidez nous ! ',
sidebar_donate              : 'Faire une donation ',
sidebar_thanks              : 'MERCI !!! ',

/* Decrypt Panel */
decrypt_Access              : 'Comment voulez-vous accéder à votre portefeuille ? ',
decrypt_Title               : 'Choisissez le format de votre clé privée ',
decrypt_Select              : 'Choisissez un portefeuille : ',

/* Add Wallet */
ADD_Label_1                 : 'Que voulez-vous faire ? ',
ADD_Radio_1                 : 'Générer un nouveau portefeuille ',
ADD_Radio_2                 : 'Choisissez le fichier de votre portefeuille (Keystore / JSON) ',
ADD_Radio_2_alt             : 'Choisissez le fichier de portefeuille ',
ADD_Radio_2_short           : 'CHOISISSEZ LE FICHIER DU PORTEFEUILLE... ',
ADD_Radio_3                 : 'Collez/saisissez votre clé privée ',
ADD_Radio_4                 : 'Ajoutez un compte ',
ADD_Radio_5                 : 'Collez/entrez votre mnémonique ',
ADD_Radio_5_Path            : 'Select HD derivation path ',
ADD_Radio_5_woTrezor        : '(Jaxx, Metamask, Exodus, imToken) ',
ADD_Radio_5_withTrezor      : '(Jaxx, Metamask, Exodus, imToken, TREZOR) ',
ADD_Radio_5_PathAlternative : '(Ledger) ',
ADD_Radio_5_PathTrezor      : '(TREZOR) ',
ADD_Radio_5_PathCustom      : '(Custom) ',
ADD_Label_2                 : 'Nommez votre compte : ',
ADD_Label_3                 : 'Votre fichier est chiffré, merci de saisir le mot de passe ',
ADD_Label_4                 : 'Ajouter un compte à afficher ',
ADD_Warning_1               : 'Vous pouvez ajouter n\'importe quel compte pour l\'afficher dans l\'onglet "portefeuilles" sans uploader une clé privée. Cela ne veut **pas** dire que vous aurez accès à ce portefeuille, ni que vous pouvez transférer des Ethers depuis ce portefeuille. ',
ADD_Label_5                 : 'Entrez l\'adresse ',
ADD_Label_6                 : 'Déverrouiller votre portefeuille ',
ADD_Label_6_short           : 'Déverrouiller ',
ADD_Label_7                 : 'Ajouter un compte ',

/* Generate Wallets */
GEN_desc                    : 'Si vous voulez générer plusieurs portefeuilles, vous pouvez le faire ici ',
GEN_Label_1                 : 'Entrez un mot de passe fort (au moins 9 caractères) ',
GEN_Placeholder_1           : 'N\'oubliez PAS de sauvegarder ceci ! ',
GEN_SuccessMsg              : 'Succès ! Votre portefeuille a été généré. ',
GEN_Label_2                 : 'Sauvegardez votre fichier Keystore ou votre clé privée. N\'oubliez pas votre mot de passe ci-dessus. ',
GEN_Label_3                 : 'Sauvegarder votre portefeuille. ',
GEN_Label_4                 : 'Imprimer votre portefeuille papier, ou conserver une version QR code. (optionnel) ',

/* Bulk Generate Wallets */
BULK_Label_1                : 'Nombre de portefeuilles à générer ',
BULK_Label_2                : 'Générer les portefeuilles ',
BULK_SuccessMsg             : 'Succès ! Vos portefeuilles ont été générés. ',

/* Sending Ether and Tokens */
SEND_addr                   : 'Adresse de destination ',
SEND_amount                 : 'Montant à envoyer ',
SEND_amount_short           : 'Montant ',
SEND_custom                 : 'Token spécifique ',
SEND_gas                    : 'Gaz ',
SEND_TransferTotal          : 'Envoi du solde total ', // updated to be shorter
SEND_generate               : 'Générer la transaction ',
SEND_raw                    : 'Transaction brute ',
SEND_signed                 : 'Transaction signée ',
SEND_trans                  : 'Envoyer la transaction ',
SENDModal_Title             : 'Attention ! ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : 'Vous êtes sur le point d\'envoyer ',
SENDModal_Content_2         : 'à l\'adresse ',
SENDModal_Content_3         : 'En êtes-vous sûr ? ',
SENDModal_Content_4         : 'NOTE : Si vous renontrez une erreur, il est très probable que vous deviez ajouter des ether à votre compte pour couvrir les coûts en gaz d\'envoi des tokens. Le gaz est payé en ether. ',
SENDModal_No                : 'Non, je veux sortir d\'ici ! ',
SENDModal_Yes               : 'Oui, j\'en suis sûr ! Effectuer la transaction. ',

/* Tokens */
TOKEN_Addr                  : 'Adresse ',
TOKEN_Symbol                : 'Symbole du token ',
TOKEN_Dec                   : 'Décimales ',
TOKEN_show                  : 'Montrer tous les tokens ',
TOKEN_hide                  : 'Cacher les tokens ',

/* Send Transaction */
TRANS_desc                  : 'Si vous voulez envoyer des tokens, allez plutôt à la page "Envoi de tokens". ',
TRANS_warning               : 'L\'emploi des fonctions "ETH seulement" et "ETC seulement" vous fait passer par un contrat. Certains services ont des problèmes avec ces transactions. En savoir plus. ',
TRANS_advanced              : '+Avancé : Ajouter du gaz ',
TRANS_data                  : 'Données ',
TRANS_sendInfo              : 'Une transaction standard utilisant 21000 gaz coûtera 0.000441 ETH. Le prix du gaz de 0.000000021 ETH que nous avons choisi est légèrement supérieur au minimum ain d\'assurer une confirmation rapide. Nous ne prenons pas de frais de transaction. ',
TRANS_gas                   : 'Limite en gaz ', // changed in ENG to Gas Limit:

/* Send Transaction Modals */
TRANSModal_Title            : 'Transactions "ETH seulement" et "ETC seulement" ',
TRANSModal_Content_0        : 'Note sur les transactions et services divers : ',
TRANSModal_Content_1        : '**ETH (Transaction standard) : ** Génère une transaction par défaut directement depuis une adresse vers une autre. Son gaz par défaut est de 21000. Il est probable que toute transaction d\'ETH envoyé de cette manière sera réexécutée sur la chaîne ETC. ',
TRANSModal_Content_2        : '**ETH seulement : ** Envoie à travers le [contrat anti-réexécution de Timon Rapp (recommandé par VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) afin de n\'envoyer que sur la chaîne **ETH**. ',
TRANSModal_Content_3        : '**ETC seulement : ** Envoie à travers le [contrat anti-réexécution de Timon Rapp (recommandé par VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) afin de n\'envoyer que sur la chaîne **ETC**. ',
TRANSModal_Content_4        : '**Coinbase & ShapeShift : ** N\'envoyer que par transaction standard. Si vous utilisez les contrats d\'envoi sur une seule chaîne, vous devrez joindre leur équipe de support pour ajouter manuellement la somme à votre solde ou pour vous rembourser. [Vous pouvez aussi essayer l\'outil "split" de Shapeshift.](https://split.shapeshift.io/) ',
TRANSModal_Content_5        : '**Kraken & Poloniex :** Pas de problème connu. Utilisez ce que vous voulez. ',
TRANSModal_Yes              : 'Génial, j\'ai compris. ',
TRANSModal_No               : 'Aïe, je comprends de moins en moins. Aidez-moi. ',

/* Offline Transaction */
OFFLINE_Title               : 'Génération et envoi d\'une transaction hors ligne ',
OFFLINE_Desc                : 'La génération d\'une transaction hors ligne s\'effectue en trois étapes. Les étapes 1 et 3 sont réalisées sur un ordinateur en ligne et l\'étape 2 sur un ordinateur déconnecté du réseau. Cela permet d\'isoler totalement vos clefs privées de toute machine connectée à l\'internet. ',
OFFLLINE_Step1_Title        : 'Étape 1 : Gérération de l\'information (ordinateur en ligne) ',
OFFLINE_Step1_Button        : 'Générer l\'information ',
OFFLINE_Step1_Label_1       : 'Addresse d\'émission ',
OFFLINE_Step1_Label_2       : 'Note : Il s\'agit de l\'adresse de départ, pas de l\'adresse d\'arrivée. Le nonce est généré à partir du compte de l\'expéditeur. Si on utilise une machine déconnectée du réseau, cette adresse est celle du compte en _cold storage_. ',
OFFLINE_Step2_Title         : 'Étape 2 : Génération de la transaction (ordinateur hors ligne) ',
OFFLINE_Step2_Label_1       : 'Adresse de destination ',
OFFLINE_Step2_Label_2       : 'Valeur / montant à envoyer ',
OFFLINE_Step2_Label_3       : 'Prix du gaz ',
OFFLINE_Step2_Label_3b      : 'Ce montant était affiché à l\'étape 1 sur votre ordinateur en ligne. ',
OFFLINE_Step2_Label_4       : 'Limite de gaz ',
OFFLINE_Step2_Label_4b      : '21000 est la limite par défaut. En cas d\'envoi vers des contrats ou avec des données supplémentaires, cette valeur peut être différente. Tout gaz non consommé vous sera renvoyé. ',
OFFLINE_Step2_Label_5       : 'Nonce ',
OFFLINE_Step2_Label_5b      : 'Cette valeur a été affichée à l\'étape 1 sur votre ordinateur en ligne. ',
OFFLINE_Step2_Label_6       : 'Données ',
OFFLINE_Step2_Label_6b      : 'Cette zone est optionnelle. Les données sont souvent utilisées lors de transactions vers des contrats. ',
OFFLINE_Step2_Label_7       : 'Entrez / sélectionnez votre clef privée / JSON. ',
OFFLINE_Step3_Title         : 'Étape 3 : Envoyer / publier la transaction (ordinateur en ligne) ',
OFFLINE_Step3_Label_1       : 'Copier ici la transaction signée à l\'étape 2 et cliquez sur le bouton "ENVOYER LA TRANSACTION". ',

/* Sign Message */
MSG_message                 : 'Message ',
MSG_date                    : 'Date ',
MSG_signature               : 'Signature ',
MSG_verify                  : 'Verifier un message ',
MSG_info1                   : 'Inclure la date courante afin que la signature ne puisse pas être réutilisée à un autre moment. ',
MSG_info2                   : 'Inclure votre surnom et là où vous l\'utilisez afin que quelqu\'un d\'autre ne puisse l\'utiliser. ',
MSG_info3                   : 'Inclure une raison spécifique pour le message afin qu\'il ne puisse être réutilisé pour une raison différente. ',

/* Deploy Contracts */
DEP_generate                : 'Générer le bytecode ',
DEP_generated               : 'Bytecode généré ',
DEP_signtx                  : 'Signer la transaction ',
DEP_interface               : 'Interface générée ',

/* My Wallet */
MYWAL_Nick                  : 'Nom du portefeuille ',
MYWAL_Address               : 'Adresse du portefeuille ',
MYWAL_Bal                   : 'Solde ',
MYWAL_Edit                  : 'Modifier ',
MYWAL_View                  : 'Voir ',
MYWAL_Remove                : 'Supprimer ',
MYWAL_RemoveWal             : 'Supprimer le portefeuille : ',
MYWAL_WatchOnly             : 'Vos comptes en affichage uniquement ',
MYWAL_Viewing               : 'Affichage des portefeuilles ',
MYWAL_Hide                  : 'Cacher les informations sur le portefeuille ',
MYWAL_Edit_2                : 'Modifier le portefeuille ',
MYWAL_Name                  : 'Nom du portefeuille ',
MYWAL_Content_1             : 'Attention ! Vous êtes sur le point de supprimer votre portefeuille ',
MYWAL_Content_2             : 'Assurez-vous d\'avoir bien **sauvegardé la clé privée/ fichier JSON et le mot de passe** associé à ce portefeuille avant de le supprimer. ',
MYWAL_Content_3             : 'Si vous voulez utiliser ce portefeuille avec MyEtherWallet CX à l\'avenir, vous devrez le rajouter manuellement en utilisant la clé privée/fichier JSON et le mot de passe. ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : 'Ceci vous permet de télécharger plusieurs versions des clefs privées et de ré-imprimer votre portefeuille papier. Vous devrez le faire pour [importer votre compte dans Gubiq/Fusion](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Si vous voulez consulter votre solde, nous recommandons d\'utiliser un explorateur de blockchain comme [etherscan.io](http://etherscan.io/). ',
VIEWWALLET_Subtitle_Short   : 'Ceci vous permet de télécharger plusieurs versions des clefs privées et de ré-imprimer votre portefeuille papier. ',
VIEWWALLET_SuccessMsg       : 'Succès ! Voici les détails de votre portefeuille. ',

/* Mnemonic */
MNEM_1                      : 'Sélectionnez l\'adresse avec laquelle vous désirez interagir. ',
MNEM_2                      : 'Votre phrase mnémonique HD unique peut accéder à un certain nombre de portefeuilles/adresses. Sélectionnez l\'adresse avec laquelle vous désirez interagir actuellement. ',
MNEM_more                   : 'Plus d\'adresses ',
MNEM_prev                   : 'Adresses précédentes ',

/* Hardware wallets */
ADD_Ledger_1                : 'Connectez votre Ledger Nano S ',
ADD_Ledger_2                : 'Ouvrez l\'application Ethereum (ou une application de contrat) ',
ADD_Ledger_3                : 'Vérifiez que Browser Support est activé dans Settings ',
ADD_Ledger_scan             : 'Se connecter au Ledger Nano S ',
ADD_Ledger_4                : 'Si aucun Browser Support n\'est activé dans la configuration, vérifiez que vous avez le [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) ',
ADD_Ledger_0a               : 'Réouvrir MyEtherWallet sur une connexion sécurisée (SSL) ',
ADD_Ledger_0b               : 'Réouvrir MyEtherWallet avec [Chrome](https://www.google.com/chrome/browser/desktop/) ou [Opera](https://www.opera.com/) ',

x_Trezor                    : 'TREZOR ',
ADD_Trezor_scan             : 'Connect to TREZOR ',
ADD_Trezor_select           : 'This is a TREZOR seed ',

/* Chrome Extension */
CX_error_1                  : 'Vous n\'avez pas de portefeuille sauvegardé. Cliquez sur ["Ajout de portefeuille"](/cx-wallet.html#add-wallet) pour en ajouter un ! ',
CX_quicksend                : 'Envoi rapide ', // if no appropriate translation, just use "Send"

/* Error Messages */
ERROR_1                     : 'Veuillez entrer un montant valide. ',
ERROR_2                     : 'Votre mot de passe doit faire au moins 9 caractères. Assurez vous qu\'il s\'agisse d\'un mot de passe fort. ',
ERROR_3                     : 'Désolé ! Notre service ne permet pas de gérer ce type de fichier de portefeuille. ',
ERROR_4                     : 'Ceci n\'est pas un fichier de portefeuille. ',
ERROR_5                     : 'Cette unité n\'existe pas, merci d\'utiliser une des unités suivantes ',
ERROR_6                     : 'Adresse invalide. ',
ERROR_7                     : 'Mot de passe invalide. ',
ERROR_8                     : 'Montant invalide. ',
ERROR_9                     : 'Limite de gaz invalide. ',
ERROR_10                    : 'Valeur des donnnées invalide. ',
ERROR_11                    : 'Montant de gaz invalide. ',
ERROR_12                    : 'Nonce invalide. ',
ERROR_13                    : 'Transaction signée invalide. ',
ERROR_14                    : 'Un portefeuille avec ce nom existe déjà. ',
ERROR_15                    : 'Portefeuille non trouvé. ',
ERROR_16                    : 'Il semble qu\'aucune proposition n\'existe encore avec cet identifiant ou qu\'il y a une erreur lors de la consultation de cette proposition. ',
ERROR_17                    : 'Un portefeuille avec cette adresse existe déja. Merci de consulter la page listant vos portefeuilles. ',
ERROR_18                    : 'Il vous faut au moins 0,01 ether sur votre compte pour couvrir les coûts du gaz. Ajoutez des ether et réessayez. ',
ERROR_19                    : 'Tout le gaz serait consommé lors de cette transaction. Cela signifie que vous avez déjà voté pour cette proposition ou que la période du débat est terminée. ',
ERROR_20                    : 'Symbole invalide ',
ERROR_21                    : 'n\'est pas un token ERC-20 valide. Si d\'autres tokens sont en train de se charger, enlevez celui-ci et réessayez. ',
ERROR_22                    : 'Impossible d\'estimer le gaz. Il n\'y a pas assez de fonds sur le compte, ou l\'adresse du contrat de réception a pu renvoyer une erreur. Vous pouvez ajuster vous-même le gaz et recommencer. Le message d\'erreur à l\'envoi peut comporter plus d\'informations. ',
ERROR_23                    : 'Entrez un nom de nœud valide ',
ERROR_24                    : 'Entrez une URL valide ; si vous êtes en https votre URL doit être https. ',
ERROR_25                    : 'Entrez un port valide ',
ERROR_26                    : 'Entrez un ID de chaîne valide ',
ERROR_27                    : 'Entrez une ABI valide ',
ERROR_28                    : '**Vous avez besoin de votre fichier Keystore et du mot de passe** (ou de la clé privée) pour accéder à ce portefeuille dans le futur. Merci de le télécharger et d\'en faire une sauvegarde externe ! Il n\'existe aucun moyen de récupérer un portefeuille si vous ne le sauvegardez pas. Merci de lire la [page d\'Aide](https://www.myetherwallet.com/#help) pour plus de détails. ',
SUCCESS_1                   : 'Adresse valide ',
SUCCESS_2                   : 'Portefeuille déchiffré avec succès ',
SUCCESS_3                   : 'Transaction envoyée. Identifiant de transaction ',
SUCCESS_4                   : 'Votre portefeuille a été ajouté avec succès ',
SUCCESS_5                   : 'Fichier sélectionné ',
WARN_Send_Link              : 'Vous être arrivé grâce à un lien qui a rempli l\'adresse, le montant, le gaz ou les champs de données pour vous. Vous pouvez modifier toutes les informations avant d\'envoyer. Débloquez votre portefeuille pour démarrer. ',

/* Gubiq Error Messages */
GETH_InvalidSender          : 'Expéditeur invalide ',
GETH_Nonce                  : 'Nonce trop bas ',
GETH_Cheap                  : 'Prix du gaz trop bas pour être accepté ',
GETH_Balance                : 'Solde insuffisant ',
GETH_NonExistentAccount     : 'Compte inexistant ou solde du compte trop bas ',
GETH_InsufficientFunds      : 'Fonds insuffisants pour gaz * prix + valeur ',
GETH_IntrinsicGas           : 'Gaz intrinsèque trop bas ',
GETH_GasLimit               : 'Limite en gaz dépassée ',
GETH_NegativeValue          : 'Valeur négative ',
/* Parity Error Messages */
PARITY_AlreadyImported      : "Une transaction avec un même hash a déjà été importée.",
PARITY_Old                  : "Le nonce de la transaction est trop bas. Essayez d'incrémenter le nonce.",
PARITY_TooCheapToReplace    : "Les frais de transaction sont trop bas. Il y a une autre transaction avec le même nonce en file d'attente. Essayez d'augmenter les frais ou d'incrémenter le nonce.",
PARITY_LimitReached         : "Il y a trop de transactions en file d'attente. Votre transaction a été abandonnée en raison de cette limite. Essayez d'augmenter les frais.",
PARITY_InsufficientGasPrice : "Les frais de transaction sont trop bas. Ils ne satisfont pas au minimum de votre nœud (minimum : {}, reçu : {}). Essayez d'augmenter les frais.",
PARITY_InsufficientBalance  : "iFonds insuffisants. Le compte d'où vous essayez d'envoyer une transaction ne possède pas assez de fonds. Requis : {}, reçu : {}.",
PARITY_GasLimitExceeded     : "Le coût de la transaction excède la limite en gaz courante. Limite : {}, reçu : {}. Essayez de réduire le gaz fourni.",
PARITY_InvalidGasLimit      : "Le gaz fourni est en-deça de la limite.",


/* Tranlsation Info */
translate_version           : '0.3 ',
Translator_Desc             : 'Merci à nos traducteurs ',
TranslatorName_1            : '[Simon P](https://www.myetherwallet.com/?gaslimit=21000&to=0x89a18eE46b5aabC62e94b1830881887D04C687f3&value=1.0#send-transaction) · ',
TranslatorAddr_1            : '0x89a18eE46b5aabC62e94b1830881887D04C687f3 ',
/* Translator 1             : Translation in French. Début de la traduction, il reste encore du travail... Je continue dès que j'ai un peu de temps :) */
TranslatorName_2            : 'Jean Zundel · ',
TranslatorAddr_2            : '',
/* Translator 2             : */
TranslatorName_3            : 'girards ',
TranslatorAddr_3            : '',
/* Translator 3             : Insert Comments Here */
TranslatorName_4            : '',
TranslatorAddr_4            : '',
/* Translator 4             : Insert Comments Here */
TranslatorName_5            : '',
TranslatorAddr_5            : '',
/* Translator 5             : Insert Comments Here */

/* Help - Nothing after this point has to be translated. If you feel like being extra helpful, go for it. */
HELP_Warning                : 'Si vous avez créé un portefeuille -ou- téléchargé le repo avant **le 31 déc. 2015**, merci de vérifier vos portefeuilles / de télécharger une nouvelle version du repo. Cliquez ici pour plus de détails. ',
HELP_Desc                   : 'Il manque quelque chose ? Vous avez d\'autres questions ? [Contactez-nous](mailto:myetherwallet@gmail.com), et non seulement nous allons vous répondre mais aussi mettre à jour cette page afin qu\'elle soit plus utile à tout le monde à l\'avenir ! ',
HELP_Remind_Title           : 'Quelques rappels : ',
HELP_Remind_Desc_1          : '**Ethereum, MyEtherWallet.com & MyEtherWallet CX, et certaines des bibliothèques Javascript sous-jacentes que nous employons sont en cours de développement.** Bien que nous les ayons testés intensivement et que des dizaines de milliez de portefeuilles aient été créés avec succès dans le monde entier, il existe toujours une faible possibilité qu\'un incident se produise conduisant à la perte de vos ETH. N\'investissez pas plus que ce que vous êtes prêt à perdre et soyez prudent. En cas d\'accident, nous en serons désolés mais **nous ne sommes pas responsables d\'une éventuelle perte de cet Ether**. ',
HELP_Remind_Desc_2          : 'MyEtherWallet.com & MyEtherWallet CX ne sont pas des "portefeuilles web". Vous ne créez pas un compte, vous ne nous donnez pas votre Ether en dépôt. Aucune donnée ne sort de votre ordinateur ou votre navigateur. Nous vous facilitons la création, la sauvegarde et l\'accès à vos informations ainsi que l\'interaction avec la blockchain. ',
HELP_Remind_Desc_3          : 'Si vous ne sauvegardez pas votre clef privée et votre mot de passe, il n\'existe aucun moyen de regagner l\'accès à votre portefeuille et aux fonds qu\'il détient. Sauvegardez-les en plusieurs endroits et non uniquement sur votre ordinateur ! ',

HELP_0_Title                : '0) Je suis nouveau. Que puis-je faire ? ',
HELP_0_Desc_1               : 'MyEtherWallet vous donne la possibilité de générer de nouveaux portefeuilles pour stocker votre Ether par vous-même et pas sur un *exchange.* Ce processus ne s\'exécute que sur votre ordinateur, pas sur nos serveurs. Quand vous générez un nouveau portefeuille, **il est donc de votre responsabilité de le sauvegarder de manière sécurisée.** ',
HELP_0_Desc_2               : 'Créez un nouveau portefeuille. ',
HELP_0_Desc_3               : 'Sauvegardez le portefeuille. ',
HELP_0_Desc_4               : 'Vérifiez que vous avez accès à ce nouveau portefeuille et que vous avez correctement sauvé toutes les informations nécessaires. ',
HELP_0_Desc_5               : 'Transférez de l\'Ether vers ce nouveau portefeuille. ',

HELP_1_Title                : '1) Comment puis-je créer un nouveau portefeuille ? ',
HELP_1_Desc_1               : 'Allez à la page "Génération d\'un portefeuille. ',
HELP_1_Desc_2               : 'Allez à la page "Ajout de portefeuille" et sélectionnez "Générer un nouveau portefeuille" ',
HELP_1_Desc_3               : 'Entrez un mot de passe fort. Si vous pensez que vous pouvez l\'oublier, sauvegardez-le dans un endroit sûr. Vous aurez besoin de ce mot de passe pour envoyer des transactions. ',
HELP_1_Desc_4               : 'Cliquez sur "GÉNÉRER". ',
HELP_1_Desc_5               : 'Votre portefeuille a maintenant été généré. ',

HELP_2a_Title               : '2a) Comment puis-je sauvegarder mon portefeuille ? ',
HELP_2a_Desc_1              : 'Vous devez toujours sauvegarder votre portefeuille en plusieurs endroits physiques, comme sur une clef USB ou une feuille de papier. ',
HELP_2a_Desc_2              : 'Sauvegardez l\'adresse. Vous pouvez la garder pour vous-même ou la partager avec d\'autres personnes qui, de cette manière, peuvent vous envoyer de l\'Ether. ',
HELP_2a_Desc_3              : 'Sauvegardez votre clef privée en plusieurs exemplaires. Ne la partagez avec personne. Votre clef privée est nécessaire pour accéder à votre Ether pour l\'envoyer ! Il existe 3 types de clef privée : ',
HELP_2a_Desc_4              : 'Placez votre adresse, les exemplaires de la clef privée et la version PDF de votre portefeuille papier dans un dossier. Sauvegardez-le sur votre ordinateur et une clef USB. ',
HELP_2a_Desc_5              : 'Imprimez votre portefeuille si vous avez une imprimante. Sinon, écrivez votre clef privée et votre adresse usr une feuille de papier. Rangez-la dans un endroit sûr, à part de votre ordinateur et de la clef USB. ',
HELP_2a_Desc_6              : 'Gardez à l\'esprit qu\'il faut vous préserver de la perte de la clef et du mot de passe en cas de perte de votre disque dur, de votre clef oui de la feuille de papier. Vous devez également vous prémunir contre les catastrophes impactant toute une zone géographique (comme un incendie ou une inondation). ',

HELP_2b_Title               : '2b) Comment puis-je gérer en toute sécurité un stockage hors ligne avec MyEtherWallet? ',
HELP_2b_Desc_1              : 'Allez sur notre Github : [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest). ',
HELP_2b_Desc_2              : 'Cliquez sur `dist-vX.X.X.X.zip` ',
HELP_2b_Desc_3              : 'Transportez le zip sur un ordinateur hors ligne. ',
HELP_2b_Desc_4              : 'Dézippez-le et double-cliquez sur `index.html`. ',
HELP_2b_Desc_5              : 'Générez un portefeuille avec un mot de passe fort. ',
HELP_2b_Desc_6              : 'Sauvegardez l\'adresse. Sauvegardez les exemplaires de la clef privée. Sauvegardez le mot de passe si vous ne voulez pas devoir vous en souvenir toujours. ',
HELP_2b_Desc_7              : 'Rangez ces papier et/ou ces clefs USB en des endroits physiquement distants. ',
HELP_2b_Desc_8              : 'Allez à la page "Visualisation d\'un portefeuille" et entrez votre clef privée et votre mot de passe pour vous assurer de leur validité et pour accéder à votre portefeuille. Vérifiez que l\'adresse que vous avez écrite est la même. ',

HELP_3_Title                : '3) Comment puis-je vérifier que j\'ai accès à mon nouveau portefeuille ? ',
HELP_3_Desc_1               : '**Avant d\'envoyer de l\'Ether à votre portefeuille**, vous devez vous assurer que vous y avez accès. ',
HELP_3_Desc_2               : 'Naviguez vers la page "Visualisation d\'un portefeuille". ',
HELP_3_Desc_3               : 'Naviguez vers la page Visualisation d\'un portefeuille" de MyEtherWallet.com. ',
HELP_3_Desc_4               : 'Sélectionnez le fichier de votre portefeuille -ou- votre clef privée et déverrouillez votre portefeuille. ',
HELP_3_Desc_5               : 'Si le portefeuille est chiffré, une zone texte apparaîtra automatiquement. Entrez le mot de passe. ',
HELP_3_Desc_6               : 'Cliquez sur le bouton "Déverrouiller votre portefeuille". ',
HELP_3_Desc_7               : 'Les informations sur votre portefeuille doivent apparaître. Trouvez l\'adresse de votre compte près d\'une icône circulaire et colorée. Celle-ci représente visuellement votre adresse. Assurez-vous que cette adresse est celle que vous avez sauvegardée dans votre document texte et qu\'elle se trouve sur votre portefeuille papier. ',
HELP_3_Desc_8               : 'Si vous désirez détenir une grande quantité d\'Ether, nous recommandons de commencer par envoyer une petite somme depuis le nouveau portefeuille avant d\'y déposer une somme importante. Envoyez 0,001 Ether vers le nouveau portefeuille, accédez-y puis envoyez ces 0,001 Ether vers une autre adresse, et vérifiez que tout a fonctionné sans encombre. ',

HELP_4_Title                : '4) Comment puis-je envoyer de l\'Ether d\'un portefeuille vers un autre ? ',
HELP_4_Desc_1               : 'Si vous désirez transférer une grande quantité d\'Ether, vous devez d\'abord essayer d\'en envoyer d\'abord un petit montant vers votre portefeuille pour vous assurer que tout fonctionne comme prévu. ',
HELP_4_Desc_2               : 'Naviguez vers la page "Envoyer des Ether et des Tokens". ',
HELP_4_Desc_3               : 'Sélectionnez le fichier de votre portefeuille -ou- votre clef privée et déverrouillez votre portefeuille. ',
HELP_4_Desc_4               : 'Si le portefeuille est chiffré, une zone texte apparaîtra automatiquement. Entrez le mot de passe. ',
HELP_4_Desc_5               : 'Cliquez sur le bouton "Déverrouiller votre portefeuille". ',
HELP_4_Desc_6               : 'Entrez l\'adresse du destinataire dans le champ "Adresse de destination". ',
HELP_4_Desc_7               : 'Entrez le montant que vous voulez envoyer. Vous pouvez également cliquer sur "Envoyer le solde total" si vous voulez envoyer tout le contenu. ',
HELP_4_Desc_9               : 'Cliquez sur "Générer la transaction". ',
HELP_4_Desc_10              : 'Quelques champs supplémentaires apparaîtront. Votre navigateur est en train de générer la transaction. ',
HELP_4_Desc_11              : 'Cliquez sur le bouton bleu "Envoyer la transaction" en dessous. ',
HELP_4_Desc_12              : 'Une fenêtre pop-up apparaîtra. Vérifiez que le montant et que l\'adresse de destination sont corrects. Puis cliquez sur "Oui, j\'en suis sûr ! Effectuer la transaction. ',
HELP_4_Desc_13              : 'La transaction sera soumise. Son identifiant sera affiché. Vous pouvez cliquer sur l\'identifiant pour la voir sur la blockchain. ',

HELP_4CX_Title              : '4) Comment puis-je envoyer de l\'Ether avec MyEtherWallet CX ? ',
HELP_4CX_Desc_1             : 'D\'abord, vous devez ajouter un portefeuille. Ceci fait, deux possibilités s\'offrent à vous : la fonctionnalité "Envoi rapide" de l\'icône de l\'extension Chrome ou la page "Envoyer des Ether et des Tokens". ',
HELP_4CX_Desc_2             : 'Envoi rapide : ',
HELP_4CX_Desc_3             : 'Cliquez sur l\'icône de l\'extension Chrome. ',
HELP_4CX_Desc_4             : 'Cliquez sur le bouton "Envoi rapide". ',
HELP_4CX_Desc_5             : 'Sélectionnez le portefeuille d\'où vous désirez envoyer. ',
HELP_4CX_Desc_6             : 'Entrez l\'adresse à laquelle vous désirez envoyer dans le champ "Adresse de destination :". ',
HELP_4CX_Desc_7             : 'Entrez le montant que vous voulez envoyer. Vous pouvez également cliquer sur "Envoyer le solde total" sur vous voulez envoyer tout le contenu. ',
HELP_4CX_Desc_8             : 'Cliquez sur "Enoyer la transaction". ',
HELP_4CX_Desc_9             : 'Vérifiez que l\'adresse et le montant envoyé sont corrects. ',
HELP_4CX_Desc_10            : 'Entrez le mot de passe de ce portefeuille. ',
HELP_4CX_Desc_11            : 'Cliquez sur "Envoyez la transaction." ',
HELP_4CX_Desc_12            : 'Avec la page "Envoyer des Ether et des Tokens" ',

HELP_5_Title                : '5) Comment puis-je lancer MyEtherWallet.com hors ligne/localement ? ',
HELP_5_Desc_1               : 'Vous pouvez lancer MyEtherWallet.com sur votre ordinateur au lieu de passer par les serveurs GitHub. Vous pouvez générer un portefeuille en restant totalement hors ligne et envoyer des transactions depuis la page "Transaction hors ligne". ',
HELP_5_Desc_7               : 'MyEtherWallet.com tourne maintenant complètement sur votre ordinateur. ',
HELP_5_Desc_8               : 'Au cas où cela ne vous soit pas familier, vous devez conserver l\'intégralité du dossier pour faire tourner le site web et non uniquement `index.html`. Ne touchez à rien, ne déplacez rien dans le dossier. Si vous stockez une sauvegarde du repo MyEtherWallet pour l\'avenir, nous vous recommandons ne ne stocker que le ZIP afin d\'être sûr que le contenu du dossier restera intact. ',
HELP_5_Desc_9               : 'Comme nous améliorons constamment MyEtherWallet.com, nous vous recommandons de mettre régulièrement à jour votre version sauvegardée. ',

HELP_5CX_Title              : '5) Comment puis-je installer cette extension depuis le repo au lieu du Chrome Store ? ',
HELP_5CX_Desc_2             : 'Cliquez sur `chrome-extension-vX.X.X.X.zip` ',
HELP_5CX_Desc_3             : 'Allez dans Google Chrome et trouvez les paramètres (dans le menu en haut à droite). ',
HELP_5CX_Desc_4             : 'Cliquez sur "Extensions" à gauche. ',
HELP_5CX_Desc_5             : 'Cliquez sur la case "Mode développeur" en haut de cette page. ',
HELP_5CX_Desc_6             : 'Cliquez sur le bouton "Chargez l\'extension non empaquetée...". ',
HELP_5CX_Desc_7             : 'Naviguez vers le dossier que vous avez téléchargé et dézippé auparavant. Cliquez sur "Sélectionner". ',
HELP_5CX_Desc_8             : 'L\'extension doit maintenant apparaître dans vos extensions et dans la barre des extensions de Chrome. ',

HELP_7_Title                : '7) Comment puis-je envoyer des tokens et ajouter des tokens spécifiques ? ',
HELP_7_Desc_0               : '[Ethplorer.io](https://ethplorer.io/) est un excellent moyen d\'explorer les tokens et de trouver les décimales d\'un token. ',
HELP_7_Desc_1               : 'Naviguez vers la page "Envoi de tokens". ',
HELP_7_Desc_2               : 'Déverrouillez votre portefeuille. ',
HELP_7_Desc_3               : 'Entre l\'adresse à laquelle vous désirez faire l\'envoi dans le champ "Adresse de destination". ',
HELP_7_Desc_4               : 'Entrez le montant que vous désirez envoyer. ',
HELP_7_Desc_5               : 'Sélectionnez le token que vous désirez envoyer. ',
HELP_7_Desc_6               : 'Si celui-ci n\'est pas listé : ',
HELP_7_Desc_7               : 'Cliquez sur "Spécifique". ',
HELP_7_Desc_8               : 'Entrez l\'adresse, le nom et les décimales du token. Ces informations sont fournies par les développeurs du token et sont également nécessaires quand vous faites "Add a Watch Token" dans Fusion. ',
HELP_7_Desc_9               : 'Cliquez sur "Sauver". ',
HELP_7_Desc_10              : 'Vous pouvez maintenant envoyer ces tokens ainsi qu\'en voir le solde dans la zone sur le côté. ',
HELP_7_Desc_11              : 'Cliquez sur "Générer la transaction". ',
HELP_7_Desc_12              : 'Quelques champs supplémentaires vont apparaître : votre navigateur est en train de générer la transaction. ',
HELP_7_Desc_13              : 'Cliquez sur le bouton bleu "Envoyer la transation" au dessous. ',
HELP_7_Desc_14              : 'Une fenêtre pop-up va apparaître. Vérifiez que le montant et que l\'adresse de destination sont corrects puis cliquez sur le bouton "Oui, j\'en suis sûr ! Effectuer la transaction." ',
HELP_7_Desc_15              : 'La transaction est alors soumise et l\'identifiant de transaction est affiché. Vous pouvez cliquer dessus pour le voir sur la blockchain. ',

HELP_8_Title                : '8) Que se passe-t-il si votre site tombe ? ',
HELP_8_Desc_1               : 'MyEtherWallet n\'est pas un portefeuille sur le web. Vous n\'avez pas de login et rien n\'est jamais stocké sur nos serveurs. Ce n\'est qu\'une interface qui vous permet d\'interagir avec la blockchain. ',
HELP_8_Desc_2               : 'Si MyEtherWallet.com tombe, vous devrez trouver un autre moyen (comme gubiq ou Ubiq Wallet / Fusion) pour faire la même chose. Mais vous n\'aurez pas à "récupérer" votre Ether depuis MyEtherWallet parce qu\'il ne se trouve pas dans MyEtherWallet. Il est chez vous, dans le portefeuille que vous avez généré par notre site. ',
HELP_8_Desc_3               : 'Vous pouvez maintenant importer facilement votre clef privée non chiffrée et vos fichiers (chiffrés) au format Gubiq/Fusion, directement dans gubiq / Ubiq Wallet / Fusion. Voir question #12 ci-dessous. ',
HELP_8_Desc_4               : 'De plus, la probabilité que nous laissions tomber MyEtherWallet approche zéro. Il ne nous coûte presque rien de le maintenir comme nous n\'y stockons aucune information. Si le domaine venait à être perdu, le logiciel sera toujours disponible publiquement sur [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). Vous pourrez y télécharger le ZIP et le faire tourner localement. ',

HELP_8CX_Title              : '8) Que se passe-t-il si MyEtherWallet CX disparaît ? ',
HELP_8CX_Desc_1             : 'D\'abord, toutes les données sont sauvegardées sur votre ordinateur et non sur nos serveurs. Cela peut paraître étonnant mais, quand vous regardez sur l\'extension Chrome, ce que vous voyez *ne se trouve pas* sur nos serveurs ; tout est stocké sur votre propre ordinateur. ',
HELP_8CX_Desc_2             : 'Cela dit, il est **très important** que vous sauvegardiez toutes les données de tous les portefeuilles générés par MyEtherWallet CX. De cette manière, si quoi que ce soit arrivait à MyEtherWallet CX ou à votre ordinateur, vous conserveriez toutes les informations nécessaires pour accéder à votre Ether. Voir #2a pour la sauvegarde de vos portefeuilles. ',
HELP_8CX_Desc_3             : 'Si, pour une raison quelconque, MyEtherWallet CX disparaissait du Chrome Store, vous pourrez en trouver le source sur Github et le charger manuellement. Voir #5 ci-dessus. ',

HELP_9_Title                : '9) La page "Envoyer des Ether et des Tokens" est-elle hors ligne ? ',
HELP_9_Desc_1               : 'Non. Elle a besoin de l\'internet pour obtenir le prix actuel du gaz, le nonce de votre compte et pour émettre la transaction (c\'est-à-dire "envoyer"). Cependant, elle n\'envoie que la transaction signée. Votre clef privée reste en sécurité chez vous. Nous fournissons maintenant aussi une page "Transaction hors ligne" pour vous permettre de conserver en permanence vos clefs privées sur une machine hors ligne. ',

HELP_10_Title               : '10) Comment puis-je faire une transaction hors ligne ? ',
HELP_10_Desc_1              : 'Allez à la page "Transaction hors ligne" avec votre ordinateur en ligne. ',
HELP_10_Desc_2              : 'Entrez l\'"Adresse d\'émission". Attention, c\'est l\'adresse *d\'où* vous envoyez et non celle *vers* laquelle vous envoyez. Ceci va générer ke nonce et le prix du gaz. ',
HELP_10_Desc_3              : 'Allez sur votre ordinateur hors ligne. Entrez l\'"Adresse de destination" et le "Montant" que vous désirez envoyer. ',
HELP_10_Desc_4              : 'Entrez le "Prix du gaz" tel qu\'il vous a été affiché sur l\'ordinateur en ligne à la première étape. ',
HELP_10_Desc_5              : 'Entrez le "Nonce" tel qu\'il vous a été affiché sur l\'ordinateur en ligne à la première étape. ',
HELP_10_Desc_6              : 'La "Limite en gaz" a une valeur de 21000 par défaut. Ceci couvre les frais d\'une transaction standard. Si vous envoyez à un contrat ou si vous embarquez des données supplémentaires avec votre transaction vous devrez augmenter la limite de gaz. Tout gaz non consommé vous sera retourné. ',
HELP_10_Desc_7              : 'Si vous le désirez, entrez des données. Dans ce cas, vous devrez inclure plus que la limite de 21000 par défaut? Toutes les données sont au format hexadécimal. ',
HELP_10_Desc_8              : 'Sélectionnez le fichier de votre portefeuille -ou- votre clef privée et déverrouillez votre portefeuille. ',
HELP_10_Desc_9              : 'Cliquez sur le bouton "Générer la transaction signée". ',
HELP_10_Desc_10             : 'Le champ de données sous ce bouton se remplit avec votre transaction signée. Copiez-la et revenez avec elle sur votre ordinateur en ligne. ',
HELP_10_Desc_11             : 'Sur votre ordinateur en ligne, collez la transaction signée dans le champ texte et cliquez sur "Envoyez l\'Ether". Ceci émettra votre transaction. ',

HELP_12_Title               : '12) Comment puis-je importer un portefeuille créé par MyEtherWallet dans gubiq / Ubiq Wallet / Fusion ? ',
HELP_12_Desc_1              : 'Avec un fichier Gubiq/Fusion JSON de MyEtherWallet v2+.... ',
HELP_12_Desc_2              : 'Allez à la page "Visualisation d\'un portefeuille". ',
HELP_12_Desc_3              : 'Déverrouillez votre portefeuille avec votre clef privée **chiffrée** ou votre fichier JSON. ',
HELP_12_Desc_4              : 'Allez à la page "Mes portefeuilles". ',
HELP_12_Desc_5              : 'Sélectionnez le portefeuille que vous désirez importer dans Fusion, cliquez sur l\'icône "View", entrez votre mot de passe et accédez à votre portefeuille. ',
HELP_12_Desc_6              : 'Allez à la section "Téléchargez le fichier JSON file - Format Gubiq/Fusion (chiffé)". Cliquez sur le bouton "Télécharger" en dessous. Vous avez maintenant votre fichier *keystore.* ',
HELP_12_Desc_7              : 'Ouvrez l\'application Ubiq Wallet. ',
HELP_12_Desc_8              : 'Dans la barre de menu, allez sur "Accounts" -> "Backup" -> "Accounts" ',
HELP_12_Desc_9              : 'Ceci ouvre votre dossier de keystores. Copiez-y le fichier que vous venez de télécharger (`UTC--2016-04-14......../`) dans ce dossier. ',
HELP_12_Desc_10             : 'Votre compte doit apparaître immédiatement sous "Accounts." ',
HELP_12_Desc_11             : 'Avec votre clef privée non chiffrée... ',
HELP_12_Desc_12             : 'Si vous n\'avez pas déjà votre clef privée non chiffrée, allez à la page "Visualisation d\'un portefeuille". ',
HELP_12_Desc_13             : 'Sélectionnez le fichier de votre portefeuille -ou- entrez/collez votre clef privée pour déverrouiller votre portefeuille. ',
HELP_12_Desc_14             : 'Copiez votre clef privée (non chiffrée). ',
HELP_12_Desc_15             : 'Si vous êtes sur un Mac : ',
HELP_12_Desc_15b            : 'Si vous êtes sur un PC : ',    // Strange, already in French, not found in de.js
HELP_12_Desc_16             : 'Ouvez Text Edit et collez cette clef privée. ',
HELP_12_Desc_17             : 'Dans la barre de menu, cliquez sur "Format" -> "Make Plain Text". ',
HELP_12_Desc_18             : 'Sauvegardez ce fichier vers votre `Desktop/` en tant que `nothing_special_delete_me.txt`. Assurez-vous qu\'il précise "UTF-8" et "If no extension is provided use .txt" dans le dialogue de sauvegarde. ',
HELP_12_Desc_19             : 'Ouvrez un terminal et lancez la commande suivante : `gubiq account import ~/Desktop/nothing_special_delete_me.txt` ',
HELP_12_Desc_20             : 'Ceci vous invitera à choisir un nouveau mot de passe. C\'est celui que vous utiliserez dans gubiq / Ubiq Wallet / Fusion à chaque vois que vos enverrez une transaction, donc ne l\'oubliez pas. ',
HELP_12_Desc_21             : 'Après que l\'import a réussi, supprimez `nothing_special_delete_me.txt` ',
HELP_12_Desc_22             : 'La prochaine fois que vous ouvrirez l\'application Ubiq Wallet, votre compte sera listé sous "Accounts". ',
HELP_12_Desc_23             : 'Ouvrez Notepad et collez-y la clef privée ',
HELP_12_Desc_24             : 'Sauvegardez le fichier en tant que `nothing_special_delete_me.txt` sur `C:` ',
HELP_12_Desc_25             : 'Lancez la commande `gubiq account import C:\\nothing_special_delete_me.txt` ',
HELP_12_Desc_26             : 'Ceci vous invitera à choisir un nouveau mot de passe. C\'est celui que vous utiliserz dans gubiq / Ubiq Wallet / Fusion à chaque foiq que vous enverrez une transaction donc ne l\'oubliez pas. ',
HELP_12_Desc_27             : 'Après que l\'import a réussi, supprimez `nothing_special_delete_me.txt` ',
HELP_12_Desc_28             : 'La prochaine fois que vous ouvrirez l\'application Ubiq Wallet, votre compte sera listé sous "Accounts". ',

HELP_13_Title               : '13) Que signifie « Fonds insuffisants. Le compte d\'où vous essayez d\'envoyer une transaction ne possède pas assez de fonds. Requis : XXXXXXXXXXXXXXXXXXX, reçu : XXXXXXXXXXXXXXXXXXX. » ? ',
HELP_13_Desc_1              : 'Cela signifie que vous n\'avez pas assez d\'Ether sur votre compte pour couvrir les coûts en gaz. Chaque transaction (y compris pour les tokens et les contrats) demandent du gaz, et ce gaz est payé en Ether. Le nombre affiché est le montant requis pour couvrir le coût de la transaction en Wei. Prenez ce nombre, divisez-le par `1000000000000000000` et soustrayez la somme en Ether que vous essayiez d\'envoyer (si vous tentiez d\'envoyer de l\'Ether). Cela vous donnera le montant en Ether dont vous avez besoin pour que le compte effectue la transaction. ',

HELP_14_Title               : '14) Certains sites randomisent (initialisent) la génération de clef privée par les mouvements de la sours. Ce n\'est pas le cas de MyEtherWallet.com. La génération de nombres aléatoires de MyEtherWallet est-elle sûre ? ',
HELP_14_Desc_1              : 'Bien que l\'interception des mouvement de la souris soit jugée attractive par beaucoup, et que nous en comprenions les raisons, la réalité est que window.crypto assure plus d\'entropie que les mouvements de votre souris. L\'utilisation de ces mouvements est sûre mais nous (ainsi que de nombreux projets crypto) avons de bonnes raisons de croire en window.crypto. De plus, MyEtherWallet.com peut être utilisé sur des périphériques tactiles. Voici une [conversation entre un redditor rageur et Vitalik Buterin sur les mouvements de souris et window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) et voici [les spécifications w3 de window.crypto](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto). ',

HELP_15_Title               : '15) Pourquoi le compte que je viens de créer n\'apparaît-il pas dans l\'explorateur de blockchain ? (i.e. : etherchain, etherscan) ',
HELP_15_Desc_1              : 'Les comptes n\'apparaissent dans un explorateur de blockchain qu\'après une activité y ait eu lieu comme, par exemple, quand on y a transféré de l\'Ether. ',

HELP_16_Title               : '16) Comment puis-je vérifier le solde de mon compte ? ',
HELP_16_Desc_1              : 'Vous pouvez utiliser un explorateur de blockchain comme [etherscan.io](http://etherscan.io/). Collez votre adresse dans la barre de recherche et cela récupérera votre solde et l\'historique de vos transactions. Par exemple, voici ce que montre notre [compte de donations](http://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8) sur etherscan.io ',

HELP_17_Title               : '17) Pourquoi mon solde n\'apparaît-il pas quand je déverrouille mon portefeuille ? ',
HELP_17_Desc_1              : 'C\'est probablement dû au fait que vous vous trouvez derrière un firewall. L\'API que nous utilisons pour obtenir le solde et converir celui-ci est souvent bloquée par des firewalls pour des raisons diverses. Vous êtes toujours capable d\'envoyer des transactions mais il vous faut employer une autre méthode pour voir le solde, comme etherscan.io ',

HELP_18_Title               : '18) Où est le fichier de mon portefeuille gubiq ? ',

HELP_19_Title               : '19) Où est le fichier de mon portefeuille Fusion ? ',
HELP_19_Desc_1              : 'Les fichiers Fusion se trouvent généralement aux endroits ci-dessus mais il est beaucoup plus facile d\'ouvrir Fusion, de sélectionner "Accounts" dans la barre du haut, puis "Backup" et "Accounts". Cela ouvre le dossier où vos fichiers sont stockés. ',

HELP_20_Title               : '20) Où est le fichier de mon portefeuille de *pre-sale* (pré-vente) ? ',
HELP_20_Desc_1              : 'Là où vous l\'avez mis. ;) Il vous a aussi été envoyé donc allez vérifier vos mails. Cherchez le fichier appelé `"ethereum_wallet_backup.json"` et choisissez ce fichier. Il est chiffré avec un mot de passe que vous avez créé pendant l\'achat au moment de la pré-vente. ',

HELP_21_Title               : '21) N\'importe qui ne peut-il pas prendre une clef privée au hasard, chercher un solde et l\'envoyer à sa propre adresse ? ',
HELP_21_Desc_1              : 'Version courte : oui, mais trouver un compte avec un solde prendrait plus longtemps que la durée de l\'univers... donc... non. ',
HELP_21_Desc_2              : 'Version longue : Ethereum est basé sur la [cryptographie à clef publique](https://en.wikipedia.org/wiki/Public-key_cryptography), plus précisément la [cryptographie des courbes elliptiques (ECC)](https://eprint.iacr.org/2013/734.pdf) qui est très couramment employée, pas uniquement dans Ethereum. La plupart des serveurs sont protégés par les ECC. Bitcoin les emploie ainsi que SSH, TLS et bien d\'autres protocoles. Dans le cas spécifique d\'Ethereum, les clefs font 256 bits et sont plus fortes que celles en 128 et 192 bits, encore très employées et toujours considérées comme sûres par les experts. ',
HELP_21_Desc_3              : 'Vous avez une clef privée et une clef publique. La clef privée peut servir à dériver la clef publique mais l\'inverse est impossible. Le fait que l\'internet et le monde entier utilise ce système cryptographique signifie que, s\'il existait un moyen de dériver la clef privée de la clef publique, le risque que courrait votre Ether serait le moindre des problèmes de tout le monde. ',
HELP_21_Desc_4              : 'Cela dit, OUI : si quelqu\'un possède votre clef privée, il peut envoyer de l\'Ether depuis votre compte, de même que si une personne a le mot de passe de votre email, elle peut lire des mails ou en envoyer, ou si c\'est le mot de passe de votre compte en banque, elle peut faire des virements. Vous pouvez télécharger la versoin KEystore de votre clef privée qui est la clef privée chiffrée avec un mot de passe. Cela ressemble à avoir un mot de passe protégé par un autre mot de passe. ',
HELP_21_Desc_5              : 'Et OUI, en théorie, on peut taper une chaîne de 64 caractères hexadécimaux jusqu\'à en trouver un qui correspond. Il est d\'ailleurs possible d\'écrire un programme qui vérifie très rapidement des clefs privée aléatoires. C\'est ce que l\'on appelle utiliser la "brute force" ou miner des clefs privées. Beaucoup de monde y a pensé très fort et très longtemps. Quelques serveurs haut de gamme peuvent vérifier plus de 1 million de clefs par seconde. Pourtant, même ce chiffre ne donnerait pas accès à un compte suffisamment approvisionné pour en valoir la chandelle ; il est bien plus probable que vous, vos enfant et vos petits-enfants mourront avant d\'obtenir une correspondance. ',
HELP_21_Desc_6              : 'Si vous connaissez un peu Bitcoin, [ceci remettra les choses en perspective :](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *Pour illustrer l\'improbabilité de tout ceci : supposons quqe chaque satoshi de chaque bitcoin qui sera jamais produit soit affecté à sa propre clef privée distincte.  La probabilité que, parmi ces clefs, s\'en trouvent deux qui correspondent à la même adresse serait d\'environ 1 sur 100 quintillons. ',
HELP_21_Desc_7              : '[Si vous voulez un argumentaire un peu plus technique :](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *Ces nombres n\'ont rien à voir avec la technologie des systèmes ; ce sont les maximums autorisés par la thermodynamique. Et ils impliquent clairement qu\'une attaque par brute force contre des clefs de 256 bits restera impossible jusqu\'à ce que l\'on construise des ordinateurs avec autre chose que de la matière et qu\'ils occupent autre chose que l\'espace. ',
HELP_21_Desc_8              : 'Cela suppose bien entendu que les clefs sont générées d\'une manière totalement aléatoire avec suffisamment d\'entropie. C\'est le cas des clefs générées ici, tout comme celles de Jaxx et de Fusion/Gubiq. Les portefeuilles Ethereum sont tous assez bons de ce point de vue. Les clefs générées par des cerveaux humains ne le sont pas, car ces derniers ne sont pas capables de partir d\'un nombre parfaitement aléatoire. Il y a eu des cas d\'autres problèmes d\'entropie insuffisante ou de nombres imparfaitement aléatoires dans le monde de Bitcoin mais il s\'agit là d\'un tout autre problème qui peut attendre un peu. ',

HELP_SecCX_Title            : 'Securité - MyEtherWallet CX ',
HELP_SecCX_Desc_1           : 'Où cette extension sauve-t-elle mes informations ? ',
HELP_SecCX_Desc_2           : 'Les informations stockées dans cette extension sont sauvegardée via [chrome.storage](http://chrome.storage/), c\'est à dire au même endroit que vos mots de passe dans Chrome. ',
HELP_SecCX_Desc_3           : 'Quelles informations sont sauvegardées ? ',
HELP_SecCX_Desc_4           : 'L\'adresse, le surnom, la clef privée sont stockés dans chrome.storage. La clef privée est chiffrée par le mot de passe défini à l\'ajout du portefeuille. Le surnom et l\'adresse du portefeuille ne sont pas chiffrés. ',
HELP_SecCX_Desc_5           : 'Pourquoi le surnom et l\'adresse du portefeuille ne sont-ils pas chiffrés ? ',
HELP_SecCX_Desc_6           : 'Si nous devions chiffrer ces informations, il vous faudrait entrer un mot de passe à chaque fois que vous voudriez voir votre solde ou les surnoms. Si cela vous ennuie, nous vous recommandons d\'utiliser MyEtherWallet.com au lieu de cette extension Chrome. ',

HELP_Sec_Title              : 'Sécurité ',
HELP_Sec_Desc_1             : 'Si l\'une des premières questions que vous vous posez est "Pourquoi devrais-je faire confiance à ces gens ?", c\'est une bonne démarche. Nous espérons que ce qui suit va dissiper vos craintes. ',
HELP_Sec_Desc_2             : 'Nous avons commencé en août 2015. Si vous recherchez ["myetherwallet" sur reddit](https://www.reddit.com/search?q=myetherwallet), vous pouvez voir qu\'un nombre considérable de personnes nous utilisent sans problème. ',
HELP_Sec_Desc_3             : 'Nous n\'allons pas prendre votre argent ou voler vos clefs privées. Il n\'y a pas de code malveillant sur ce site. En fait, les pages "Génération d\'un portefeuille" sont totalement côté client. Cela signifie que tout le code s\'éxécute sur **votre ordinateur** et n\'est jamais sauvé et/ou transmis où que ce soit. ',
HELP_Sec_Desc_4             : 'Vérifiez l\'URL -- Ce site est servi par Github et vous pouvez en voir le code source ici : [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) aux [https://www.myetherwallet.com](https://www.myetherwallet.com). ',
HELP_Sec_Desc_5             : 'Pour générer les portefeuilles, vous pouvez télécharger le [code source](https://github.com/kvhnuke/etherwallet/releases/latest). Voir #5 ci-dessus. ',
HELP_Sec_Desc_6             : 'Lancez un test et vérifiez le type d\'activité réseau. La manière la plus simple consiste en un clic droit sur la page, puis "Inspecter". Allez à l\'onglet "Network". Générez un portefeuille de test. Vous verrez qu\'il n\'y a pas d\'activité réseau. Vous pourrez voir quelque chose se produire ressemblant à data:image/gif et data:image/png. Ce sont les QR codes en cours de génération... sur votre ordinateur. Aucun octet n\'a été transféré. ',
HELP_Sec_Desc_8             : 'Si cet outil ne vous plaît pas, alors ne l\'utilisez surtout pas. Nous l\'avons créé pour qu\'il aide les gens à générer des portefeuilles et à effectuer des transactions sans avoir besoin de plonger dans les lignes de commandes ni faire tourner un nœud complet. À nouveau, n\'hésitez pas à nous faire part de vos doutes et nous répondrons aussi rapidement que possible. Merci ! ',

HELP_FAQ_Title              : 'Plus de réponses utiles aux questions fréquentes ',
HELP_Contact_Title          : 'Moyens de nous contacter'
};

module.exports = fr;
