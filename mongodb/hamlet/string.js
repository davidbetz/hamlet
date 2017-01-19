// MIT License
// 
// Copyright(c) 2016-2017 David Betz
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

function setupLexicon() {
    var raw = "whos there nay answer me stand and unfold yourself long live the king bernardo he you come most carefully upon your hour tis now struck twelve get thee to bed francisco for this relief much thanks bitter cold i am sick at heart have had quiet guard not a mouse stirring well good night if do meet horatio marcellus rivals of my watch bid them make haste think hear ho enter friends ground liegemen dane give o farewell honest soldier who hath relieved has place exit holla say what is piece him welcome thing appeard again tonight seen nothing says but our fantasy will let belief take hold touching dreaded sight twice us therefore entreated along with minutes that apparition may approve eyes speak it tush twill appear sit down awhile once assail ears are so fortified against story we two nights last all when yond same star thats westward from pole made his course illume part heaven where";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "burns myself bell then beating one ghost peace break off look comes in figure like dead thou art scholar looks mark harrows fear wonder would be spoke question usurpst time together fair warlike form which majesty buried denmark did sometimes march by charge offended see stalks away stay gone how tremble pale something more than ont before god might believe without sensible true avouch mine own as thyself such was very armour on ambitious norway combated frownd an angry parle smote sledded polacks ice strange thus jump martial stalk particular thought work know gross scope opinion bodes some eruption state tell knows why strict observant nightly toils subject land daily cast brazen cannon foreign mart implements war impress shipwrights whose sore task does divide sunday week toward sweaty doth jointlabourer day ist can inform least whisper goes image even fortinbras thereto prickd emulate pride dared combat valiant hamlet side known world esteemd slay seald compact ratified law heraldry forfeit";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "life those lands stood seized conqueror moiety competent gaged returnd inheritance been vanquisher covenant carriage article designd fell sir young unimproved mettle hot full skirts here sharkd up list lawless resolutes food diet enterprise stomach int no other unto recover strong hand terms compulsatory foresaid father lost main motive preparations source chief head posthaste romage een sort portentous armed through these wars mote trouble minds eye high palmy rome little ere mightiest julius graves tenantless sheeted squeak gibber roman streets stars trains fire dews blood disasters sun moist influence neptunes empire stands almost doomsday eclipse precurse fierce events harbingers preceding still fates prologue omen coming earth demonstrated climatures countrymen soft behold lo reenter ill cross though blast illusion hast any sound or use voice done ease grace cock crows privy thy countrys fate happily foreknowing avoid uphoarded extorted treasure womb they spirits oft walk death stop shall strike partisan wrong being majestical offer show violence air invulnerable vain blows";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "malicious mockery about crew started guilty fearful summons heard trumpet morn lofty shrillsounding throat awake warning whether sea extravagant erring spirit hies confine truth herein present object probation faded crowing ever gainst season wherein saviours birth celebrated bird dawning singeth dares stir abroad wholesome planets fairy takes nor witch power charm hallowd gracious russet mantle clad walks oer dew yon eastward hill advice impart dumb consent acquaint needful loves fitting duty lets dot pray morning find conveniently exeunt claudius queen gertrude polonius laertes voltimand cornelius lords attendants yet dear brothers memory green befitted bear hearts grief whole kingdom contracted brow woe far discretion fought nature wisest sorrow remembrance ourselves sometime sister imperial jointress twere defeated joy auspicious dropping mirth funeral dirge marriage equal scale weighing delight dole taken wife barrd better wisdoms freely affair follows holding weak supposal worth thinking late disjoint out frame colleagued dream advantage faild pester message importing surrender bonds brother ourself meeting business writ uncle";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "impotent bedrid scarcely hears nephews purposeto suppress further gait levies lists proportions dispatch bearers greeting old giving personal delated articles allow commend things doubt heartily whats news told suit cannot reason loose wouldst beg asking native instrumental mouth throne dread lord leave favour return france whence willingly came coronation must confess thoughts wishes bend bow pardon fathers wrung slow laboursome petition hard beseech go thine best graces spend cousin son aside kin less kind clouds hang too nighted colour friend vailed lids seek noble dust knowst common lives die passing eternity ay madam seems alone inky cloak mother customary suits solemn black windy suspiration forced breath fruitful river dejected havior visage forms moods shapes denote truly indeed seem actions man play within passeth trappings sweet commendable mourning duties survivor bound filial obligation term obsequious persever obstinate condolement impious stubbornness unmanly shows incorrect unfortified mind impatient understanding simple unschoold vulgar sense should peevish opposition fie fault absurd theme cried first";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "corse till died today throw unprevailing note immediate nobility love dearest bears intent going back school wittenberg retrograde desire remain cheer comfort chiefest courtier lose her prayers obey loving reply gentle unforced accord sits smiling whereof jocund health drinks great kings rouse heavens bruit respeaking earthly thunder solid flesh melt thaw resolve itself into everlasting fixd canon selfslaughter weary stale flat unprofitable uses ah unweeded garden grows seed rank possess merely months excellent hyperion satyr beteem winds visit face roughly remember she increase appetite grown fed month ontfrailty name woman shoes were followd poor body niobe tearswhy beast wants discourse mournd longermarried hercules salt unrighteous tears left flushing galled married wicked speed post dexterity incestuous sheets tongue hail lordship glad horatioor forget servant change faith truant disposition enemy ear truster report elsinore teach drink deep depart mock fellowstudent mothers wedding thrift baked meats coldly furnish forth tables met foe fathermethinks saw goodly yesternight admiration attent deliver witness gentlemen marvel";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "gods their vast middle encounterd point exactly capape appears stately thrice walkd oppressd fearsurprised truncheons length whilst distilled jelly act dreadful secrecy third kept deliverd both each word knew hands platform watchd none methought lifted its address motion loud shrunk vanishd honourd sirs troubles armd top toe foot yes wore beaver lookd frowningly countenance anger red constantly amazed stayd while moderate hundred longer sawt beard grizzledno sable silverd perchance warrant assume person hell gape hitherto conceald tenable silence whatsoever else hap requite fare twixt eleven honour arms foul soul deeds rise oerwhelm mens ophelia necessaries embarkd benefit convoy assistant sleep trifling fashion toy violet youth primy forward permanent lasting perfume suppliance minute crescent grow thews bulk temple waxes inward service wide withal perhaps soil cautel besmirch virtue greatness weighd himself unvalued persons carve choice depends safety circumscribed yielding fits wisdom saying deed weigh loss sustain credent songs chaste open unmasterd importunity keep rear affection shot danger chariest maid prodigal";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "enough unmask beauty moon scapes calumnious strokes canker galls infants spring buttons disclosed liquid contagious blastments imminent wary lies rebels near effect lesson watchman ungracious pastors steep thorny way whiles puffd reckless libertine primrose path dalliance treads recks rede double blessing occasion smiles second aboard shame wind shoulder sail few precepts character unproportioned familiar means adoption tried grapple hoops steel dull palm entertainment newhatchd unfledged comrade beware entrance quarrel beart opposed every mans censure reserve judgment costly habit purse buy expressd fancy rich gaudy apparel proclaims station select generous neither borrower lender loan loses borrowing dulls edge husbandry above ownself follow canst false humbly invites servants tend said lockd key please marry bethought given private audience free bounteous put caution understand clearly behoves daughter between many tenders pooh girl unsifted perilous circumstance call baby taen pay sterling tender dearly ornot crack phrase running thusyoull fool importuned honourable speech holy vows springes catch woodcocks lends blazes light heat extinct promise";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "amaking somewhat scanter maiden presence set entreatments higher rate command parley larger tether brokers dye investments mere implorators unholy breathing sanctified pious bawds beguile plain slander moment leisure words talk tot ways bites shrewdly nipping eager lacks draws held wont flourish trumpets ordnance mean wake keeps wassail swaggering upspring reels drains draughts rhenish kettledrum bray triumph pledge custom manner born breach observance heavyheaded revel east west makes traduced taxd nations clepe drunkards swinish addition achievements performd height pith marrow attribute chances men vicious mole birthwherein since choose origin oergrowth complexion breaking pales forts oerleavens plausive manners carrying stamp defect natures livery fortunes virtues elsebe pure infinite undergo general corruption dram eale substance scandal angels ministers defend goblin damnd bring airs blasts intents charitable comest questionable shape royal burst ignorance canonized bones hearsed cerements sepulchre quietly inurnd oped ponderous marble jaws complete revisitst glimpses making hideous fools horridly shake beyond reaches souls wherefore beckons impartment courteous action waves removed pins";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "fee immortal tempt flood summit cliff beetles base horrible deprive sovereignty draw madness puts toys desperation brain fathoms roar beneath ruled cries petty artery hardy nemean lions nerve calld unhand desperate imagination fit after issue rotten direct wilt lead sulphurous tormenting flames render alas pity lend serious hearing revenge shalt doomd certain confined fast fires crimes days burnt purged forbid secrets prisonhouse could tale lightest harrow freeze start spheres knotted combined locks hair end quills fretful porpentine eternal blazon didst unnatural murder knowt wings swift meditation sweep apt duller shouldst fat weed roots lethe wharf sleeping orchard serpent stung forged process rankly abused sting wears crown prophetic adulterate witchcraft wit traitorous gifts seducewon shameful lust seemingvirtuous fallingoff dignity went vow decline wretch natural never moved lewdness court radiant angel linkd sate celestial prey garbage methinks scent brief always afternoon secure stole juice cursed hebenon vial porches pour leperous distilment holds enmity quicksilver courses gates alleys sudden vigour posset curd";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "droppings milk thin instant tetter barkd lazarlike vile loathsome crust smooth dispatchd cut blossoms sin unhouseld disappointed unaneld reckoning sent account imperfections couch luxury damned incest howsoever pursuest taint contrive aught thorns bosom lodge prick glowworm matin gins uneffectual adieu host couple sinews stiffly seat distracted globe yea table wipe trivial fond records saws books pressures past observation copied commandment book volume unmixd baser matter pernicious villain tablesmeet smile im sure writing sworn t withinlord withinheaven hillo boy wonderful youll reveal secret theres neer dwelling hes arrant knave needs grave right wild whirling sorry offend offence saint patrick vision oermaster scholars soldiers request sweart sword already swear ha sayst truepenny onyou fellow cellarage propose oath hic et ubique shift hither lay worthy pioner remove wondrous stranger dreamt philosophy help mercy odd soeer hereafter antic times seeing encumberd headshake pronouncing doubtful ambiguous need rest perturbed express friending willing lack fingers lips joint spite reynaldo money notes marvellous wisely inquire behavior";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "intend danskers paris company expense finding encompassment drift nearer demands touch distant knowledge ift addicted forgeries dishonour heed wanton usual slips companions noted liberty gaming drinking fencing swearing quarrelling drabbing another incontinency meaning breathe faults quaintly taints flash outbreak fiery savageness unreclaimed assault heres fetch laying slight sullies soild working party converse having prenominate assured closes consequence gentleman according country thishe doeswhat mass yesterday oertook ins falling tennis house sale videlicet brothel bait falsehood carp reach windlasses assays bias indirections directions former lecture wi observe inclination ply music affrighted sewing closet doublet unbraced hat stockings fould ungarterd downgyved ancle shirt knees knocking piteous purport loosed horrorshe mad took wrist arm falls perusal shaking waving raised sigh profound shatter over turnd seemd doors helps bended ecstasy violent property fordoes leads undertakings passion under afflict repel fetters denied access quoted feard trifle meant wreck beshrew jealousy proper age opinions younger close move hide hate utter rosencrantz guildenstern moreover provoke hasty sending";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "hamlets transformation sith exterior resembles entreat brought neighbourd vouchsafe companies pleasures gather glean unknown afflicts opend remedy talkd living whom adheres gentry expend supply profit hope visitation receive majesties sovereign entreaty bent feet commanded instantly changed practises pleasant helpful amen ambassadors joyfully assure liege hunts trail policy used found cause lunacy admittance fruit feast tells sons distemper oerhasty sift greetings desires preparation polack highness whereat grieved sickness impotence falsely borne sends arrests obeys receives rebuke fine assay whereon overcome gives three thousand crowns annual commission employ levied shown paper pass dominions regards allowance therein likes considerd read meantime thank welltook labour home ended expostulate waste brevity tediousness limbs outward flourishes define foolish grant remains rather defective remainder perpend daughterhave obedience surmise reads idol beautified white c faithful liar numbers reckon groans evermore lady machine solicitings received fain prove wing perceived mewhat playd desk tablebook winking mute idle round mistress bespeak prince gave lock herself resort admit messengers tokens";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "fruits repulseda short sadness thence weakness lightness declension raves mourn likely timeid positively proved otherwise pointing circumstances hid centre try four hours lobby behind arras encounter falln thereon farm carters sadly reading board presently godamercy fishmonger picked ten breed maggots dog kissing carrionhave conception conceive harping suffered extremity slanders satirical rogue grey beards faces wrinkled purging thick amber plumtree gum plentiful hams powerfully potently honesty crab backward method pregnant replies happiness often hits sanity prosperously delivered suddenly daughtermy except tedious save honoured dost lads ye indifferent children happy overhappy cap button soles shoe waist favours privates parts fortune strumpet worlds deserved prison denmarks confines wards dungeons worst either bad ambition narrow bounded nut shell count space dreams shadow airy quality shadows beggars bodies monarchs outstretched heroes fay wait dreadfully attended beaten friendship beggar halfpenny inclining deal justly purpose confession modesties craft conjure rights fellowship consonancy everpreserved proposer youif anticipation prevent discovery moult feather latebut notlost forgone exercises heavily";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "sterile promontory canopy brave oerhanging firmament roof fretted golden pestilent congregation vapours faculty moving admirable apprehension paragon animals quintessence delights stuff laugh lenten players coted plays tribute adventurous knight foil target lover gratis humourous clown lungs tickled sere blank verse halt fort tragedians city travel residence reputation inhibition innovation estimation followed rusty endeavour wonted pace aery eyases cry tyrannically clapped berattle stagesso themthat wearing rapiers afraid goosequills dare scarce thither maintains em escoted pursue sing afterwards themselves playersas bettertheir writers exclaim succession sides nation tarre controversy argument unless poet player cuffs possible throwing brains boys carry load mows lived twenty forty fifty ducats apiece picture sblood appurtenance ceremony comply garb lest extent fairly yours unclefather auntmother deceived northnorthwest southerly hawk handsaw hark hearer swaddlingclouts child prophesy monday twas roscius actor actors buz ass tragedy comedy history pastoral pastoralcomical historicalpastoral tragicalhistorical tragical comicalhistoricalpastoral scene individable poem unlimited seneca heavy plautus only jephthah judge israel hadst loved lot wot row";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "chanson abridgement five masters valenced byr ladyship altitude chopine uncurrent gold cracked ring french falconers fly straight taste passionate acted pleased million caviare wasas others judgments matters minean digested scenes modesty cunning sallets lines savoury indict author affectation called handsome chiefly aeneas dido thereabout especially speaks priams slaughter begin line rugged pyrrhus hyrcanian soit begins resemble couched ominous horse smeard dismal total gules trickd daughters impasted parching tyrannous roasted wrath oersized coagulate gore carbuncles hellish grandsire priam seeks proceed fore spoken accent anon finds striking greeks antique rebellious repugnant unequal matchd drives rage strikes whiff unnerved senseless ilium seeming feel blow flaming stoops crash prisoner declining milky reverend stick painted tyrant neutral storm rack bold speechless orb below hush rend region pause aroused vengeance sets new awork cyclops hammers fall marss proof eterne remorse bleeding synod spokes fellies wheel bowl nave low fiends barbers prithee jig bawdry sleeps hecuba mobled run barefoot threatening bisson rheum clout diadem robe";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "lank oerteemed loins blanket alarm caught venom steepd treason pronounced sport mincing husbands clamour mortal milch burning turned soon bestowed abstract chronicles epitaph desert bodykins scape whipping deserve merit bounty tomorrow gonzago study dozen sixteen insert peasant slave monstrous fiction force conceit wannd distraction aspect broken function suiting weep cue drown stage cleave horrid appal confound ignorant amaze faculties muddymettled rascal peak johnadreams unpregnant defeat coward calls breaks pate across plucks tweaks nose lie swounds pigeonliverd gall oppression fatted kites slaves offal bloody bawdy remorseless treacherous lecherous kindless murderd prompted whore unpack acursing drab scullion upont foh creatures sitting proclaimd malefactions miraculous organ tent quick blench devil pleasing melancholy potent abuses damn grounds relative s conscience confusion grating harshly turbulent dangerous feels sounded crafty aloof forcing niggard pastime oerraught order beseechd content inclined drive closely accident affront lawful espials bestow unseen frankly behaved affliction suffers wish beauties wildness honours exercise loneliness blame provedthat devotions sugar smart lash harlots";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "cheek beautied plastering ugly burthen withdraw nobler suffer slings arrows outrageous opposing heartache shocks heir consummation devoutly wishd rub shuffled coil respect calamity whips scorns oppressors proud contumely pangs despised laws delay insolence office spurns patient unworthy quietus bare bodkin fardels grunt sweat undiscoverd bourn traveller returns puzzles ills cowards hue resolution sicklied enterprises regard currents turn awry actionsoft nymph orisons sins rememberd remembrances longed redeliver composed wax givers unkind commerce sooner transform bawd translate likeness paradox believed inoculate stock relish nunnery breeder sinners accuse revengeful offences beck fellows crawling knaves wheres shut plague dowry snow escape calumny wise monsters quickly heavenly powers restore paintings yourselves amble lisp nickname wantonness marriages oerthrown courtiers expectancy rose glass mould observed observers quite ladies deject wretched suckd honey bells jangled tune harsh unmatchd feature blown blasted affections spake lackd brood hatch disclose determination england demand neglected haply seas countries different variable objects expel somethingsettled commencement sprung placed conference send ones unwatchd";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "trippingly lief towncrier gently torrent tempest whirlwind acquire beget temperance smoothness offends robustious periwigpated tear tatters rags split groundlings capable inexplicable dumbshows noise whipped oerdoing termagant outherods herod tame tutor special oerstep overdone playing mirror scorn pressure tardy unskilful judicious grieve oerweigh theatre praise highly profanely christians christian pagan strutted bellowed journeymen imitated humanity abominably reformed indifferently reform altogether clowns quantity barren spectators necessary considered villanous pitiful ready hasten just eer conversation coped flatter advancement revenue feed clothe flatterd candied lick pomp crook hinges knee fawning distinguish election suffering buffets rewards blest commingled pipe finger passions wear core theesomething seest afoot comment occulted guilt unkennel imaginations vulcans stithy heedful rivet join steal detecting theft danish fares chameleons dish eat promisecrammed capons played university accounted enact caesar killed capitol brutus brute kill capital calf patience metal attractive lap lying ophelias maids legs merry jigmaker cheerfully sables ago forgotten outlive half year build churches hobbyhorse forgot hautboys dumbshow enters lovingly";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "embracing kneels protestation declines neck lays bank flowers asleep leaves kisses pours poison poisoner mutes lament carried wooes loath unwilling accepts miching mallecho mischief belike imports counsel theyll ashamed naught stooping clemency patiently posy womans thirty phoebus cart wash tellus orbed moons borrowd sheen thirties hymen unite commutual sacred bands journeys distrust discomfort womens sized littlest doubts fears shortly operant functions beloved husband breast accurst wed killd wormwood instances respects determine validity unripe sticks tree unshaken mellow debt ending enactures destroy revels joys grieves slender aye favourite flies advanced enemies want hollow directly seasons orderly begun wills contrary devices overthrown ours ends repose trust anchors opposite blanks hence strife widow deeply rock mischance twain protests jest mousetrap tropically vienna dukes baptista knavish touches jade wince withers unwrung lucianus nephew chorus interpret puppets dallying keen cost groaning worse murderer pox damnable croaking raven bellow drugs agreeing confederate creature mixture midnight weeds collected hecates ban infected magic dire usurp immediately";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "sleepers poisons fors estate names extant italian gets gonzagos rises frighted lights stricken deer hart ungalled runs forest feathers turk mewith provincial roses razed share damon realm dismantled jove reigns verypajock rhymed ghosts pound perceive poisoning recorders perdy retirement distempered choler richer signify doctor purgation plunge wildly pronounce courtesy wits diseased amazement astonish sequel heels trade pickers stealers surely bar door deny griefs grass growsthe proverb musty youwhy toil unmannerly easy govern ventages lingers thumb eloquent stops utterance harmony skill pluck mystery lowest compass easier instrument fret bless yonder cloud camel weasel backed whale easily witching churchyards yawn breathes contagion quake nero firm cruel daggers hypocrites soever shent seals safe range prepare forthwith endure hazard hourly lunacies provide religious single peculiar strength noyance weal depend cease dies gulf massy highest mount huge lesser mortised adjoind small annexment attends boisterous ruin groan speedy voyage freefooted convey tax partial oerhear vantage smells primal eldest curse sharp stronger defeats neglect thicker";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "rain whereto serves confront prayer twofold forestalled pardond serve forgive possessd effects retain corrupted gilded shove justice prize buys shuffling compelld teeth forehead evidence rests repentance repent limed struggling engaged stubborn strings newborn babe retires pat praying revenged scannd kills sole hire salary grossly bread broad flush audit seasond passage hent drunk pleasure salvation trip kick stays physic prolongs sickly rising pranks screend sconce rood andwould soyou budge inmost drawing rat ducat slain rash lifts array discovers intruding findst busy wringing wring penetrable brassd bulwark darest wag rude blurs blush hypocrite innocent blister marriagevows dicers oaths contraction religion rhapsody glow solidity compound tristful doom thoughtsick roars thunders index counterfeit presentment seated hyperions curls front mars threaten herald mercury newlighted heavenkissing combination seal assurance mildewd blasting mountain batten moor heyday humble waits step apoplexd err thralld reserved difference wast cozend hoodmanblind feeling smelling sans mope mutine matrons proclaim compulsive ardour frost actively burn panders turnst grained spots tinct enseamed";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "stewd honeying nasty sty twentieth tithe precedent vice cutpurse rule shelf precious pocket shreds patches hover guards chide lapsed important acting whet blunted fighting weakest strongest works vacancy incorporal peep bedded excrements starts flame sprinkle cool glares conjoind preaching stones convert stern steals portal coinage bodiless creation pulse temperately healthful utterd test reword gambol mattering unction trespass skin film ulcerous mining infects spread compost ranker fatness pursy curb woo cleft worser purer uncles monster habits likewise frock aptly refrain easiness next abstinence potency desirous blessd punish scourge minister bloat pinch pair reechy paddling ravel essentially sober paddock bat gib concernings despite unpeg basket houses birds famous ape conclusions creep alack concluded letters schoolfellows adders fangd mandate marshal knavery engineer hoist petard delve yard mines crafts packing lug guts neighbour room counsellor prating severally dragging sighs heaves contend mightier rapier brainish threats answerd laid providence restraind haunt owner disease divulging apart ore among mineral metals weeps mountains ship excuse";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "aid draggd chapel untimely discord dismay safely stowed compounded besides demanded sponge replication soaks authorities officers corner jaw mouthed swallowed gleaned squeezing dry fox multitude offenders deliberate diseases appliance befalln bestowd guarded supper eats eaten convocation politic worms worm emperor lean dishes fish cat progress messenger stairs especial donemust quickness bark associates knewst purposes cherub sees leans holdst thereof cicatrice raw awe pays homage usthou mayst congruing hectic rages cure howeer haps captain marching greet licence craves conveyance promised rendezvous softly purposed poland commands frontier gain patch yield sold garrisond debate straw imposthume wealth occasions spur market large looking capability godlike fust unused bestial oblivion craven scruple precisely event quarterd examples exhort army led delicate divine mouths invisible exposing unsure eggshell rightly greatly stake staind excitements trick fame beds fight plot tomb continent importunate distract mood pitied tricks hems beats enviously straws unshaped hearers collection aim botch winks nods gestures unhappily strew conjectures illbreeding amiss artless spills fearing";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "spilt beauteous sings cockle staff sandal shoon song grassgreen turf stone shroud larded bewept truelove showers pretty ild owl bakers ask valentines betime window valentine donnd clothes duppd chamberdoor departed la gis charity quoth tumbled coach springs sorrows spies battalions people muddied unwholesome whispers greenly huggermugger inter divided pictures beasts containing feeds buzzers infect speeches necessity beggard arraign murderingpiece places superfluous switzers ocean overpeering flats impetuous riotous oerbears rabble antiquity ratifiers props caps tongues applaud counter dogs broke danes following retire calmly drop calm bastard cuckold brands harlot unsmirched rebellion giantlike divinity hedge acts incensed fill juggled allegiance blackest profoundest pit damnation negligence thoroughly certainty swoopstake winner loser ope liferendering pelican repast guiltless level pierce seven paid weight beam moral instance bore barefaced bier hey non nonny raind dove persuade adown adowna becomes steward nothings rosemary pansies document fitted fennel columbines rue herbgrace sundays daisy violets withered bonny robin turns prettiness deathbed flaxen poll moan commune collateral touchd";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "satisfaction jointly due obscure trophy hatchment rite formal ostentation callt axe sailors greeted sailor ant letter ambassador overlooked pirate appointment chase compelled valour boarded got clear became dealt thieves repair knowest speedier acquaintance knowing pursued proceeded feats crimeful mainly stirrd reasons unsinewd shes conjunctive moves sphere public gender dipping turneth wood gyves slightly timberd reverted aimd driven praises challenger perfections shook imagine claudio mighty naked kingly thereunto recount abuse postscript advise warms didest oerrule checking undertake exploit ripe device uncharge practise devise shine sum envy unworthiest siege riband careless settled graveness normandy ive served horseback gallant grew doing incorpsed deminatured toppd forgery norman lamond brooch gem masterly defence twould match scrimers swore envenom painting passages qualifies spark wick snuff abate goodness growing plurisy changes abatements delays accidents spendthrift hurts easing ulcer church sanctuarize bounds chamber excellence varnish frenchman wager heads remiss contriving peruse foils unbated anoint bought mountebank dip knife cataplasm rare simples scratchd convenience fail performance assayd";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "project cunnings bouts prepared chalice nonce sipping chance venomd stuck tread anothers heel sisters drownd willow aslant brook hoar glassy stream fantastic garlands crowflowers nettles daisies purples liberal shepherds grosser pendent boughs coronet clambering envious sliver weedy trophies weeping mermaidlike chanted snatches tunes incapable distress indued element garments pulld melodious muddy water blaze folly douts spades burial wilfully crowner sat drowned se offendendo wittingly argues branches perform argal goodman delver nill goesmark drowns shortens crowners quest gentlewoman folk spade ancient gardeners ditchers gravemakers adams profession heathen scripture adam digged dig answerest builds mason shipwright carpenter gallowsmaker outlives tenants gallows built unyoke distance cudgel mend asked gravemaker yaughan stoup liquor digs contract behove gravemaking employment daintier stealing steps clawd clutch shipped intil throws skull jowls cains jawbone politician oerreaches circumvent morrow suchaone praised suchaones chapless knocked mazzard sextons revolution seet breeding loggats ache pickaxe shrouding sheet clay guest lawyer quiddities quillets cases tenures knock dirty shovel battery hum buyer";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "statutes recognizances fines vouchers recoveries recovery dirt vouch purchases breadth indentures conveyances hardly box inheritor jot parchment sheepskins calfskins sheep calves sirrah liest absolute card equivocation undo years gaffs kibe overcame because strangely losing sexton rot dieas pocky corses nowadays inhe eight nine tanner tanned decayer whoreson lain pestilence poured flagon yoricks jester yorick abhorred gorge rims hung kissed gibes gambols flashes merriment grinning chapfallen ladys paint inch alexander looked smelt pah trace stopping bunghole consider curiously likelihood returneth loam converted beerbarrel imperious hole wall winter flaw priest procession corpse mourners maimed rites betoken fordo retiring obsequies enlarged warrantise oersways unsanctified lodged shards flints pebbles thrown allowd virgin crants strewments bringing profane requiem peaceparted unpolluted churlish ministering howling sweets scattering hoped bridebed deckd strewd treble ingenious deprived leaps pile oertop pelion skyish blue olympus advancing emphasis conjures wandering wonderwounded grappling prayst splenitive wiseness asunder until eyelids forbear thoult woot eisel crocodile whine outface leaping prate millions acres singeing";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "zone ossa wart rant female couplets drooping mew strengthen push monument proceeding mutines bilboes rashly rashness indiscretion plots pall roughhew cabin seagown scarfd dark groped fingerd packet withdrew forgetting unseal grand knaveryan exact several sorts englands bugs goblins supervise bated grinding benetted villanies playi devised wrote statists baseness write labourd learning yeomans earnest conjuration tributary stiff wheaten garland comma tween amities suchlike ases view contents debatement shrivingtime ordinant signet model folded subscribed gavet impression changeling seafight sequent insinuation points opposites thinkst whored poppd hopes angle cozenageist perfect quit evil interim lifes portraiture bravery towering osric waterfly fertile crib mess chough spacious possession diligence bonnet northerly sultry exceedingly sultryas twerei bade newly differences society showing feelingly calendar definement perdition inventorially dizzy arithmetic yaw verity extolment infusion dearth rareness diction semblable umbrage infallibly concernancy wrap rawer really nomination empty alls spent compare weapon imputation meed unfellowed dagger weapons wagered six barbary horses imponed poniards assigns girdle hangers carriages responsive hilts";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
    raw = "edified margent german swords liberalconceited bet passes exceed trial hall win lapwing dug sucked heand bevy dressy dotes ononly yesty carries winnowed bubbles commended brings attend constant fitness whensoever provided able instructs continual odds foolery gaingiving dislike forestall whit defy augury sparrow readiness betimes pardont punishd exception wrongd denies faction disclaiming arrow hurt satisfied case reconcilement elder ungored offerd embrace darkest weaker betterd wine hit exchange battlements cup union successive worn cups kettle cannoneer cannons dunks judges palpable pearl bout scant napkin brows carouses poisond thinkt dally afeard bleed woodcock springe treachery drinko villany medicine envenomd pointenvenomd stabs murderous potion temperd forgiveness timeas sergeant arresto livest aright unsatisfied thourt havet wounded standing absent felicity pain afar conquest volley oercrows dying occurrents solicited cracks flights drum english search quarry havoc cell princes bloodily affairs fulfilld ability arrived unknowing carnal accidental casual slaughters deaths upshot mistook inventors noblest claim invite also errors happen captains royally loudly field shoot bearing peal";
    raw.split(" ").forEach(function (s) { db.hamlet__.insert({ "word": s }) });
}

if (db.hamlet__.count() == 0) {
    setupLexicon();
}

var data = []
db.hamlet__.find().forEach(function (w) {
    data.push(w.word);
});

function hamlet(count) {
    return data[parseInt(Math.random() * data.length)] + (count == 1 ? "" : " " + hamlet(count - 1));
}

print(hamlet(300))