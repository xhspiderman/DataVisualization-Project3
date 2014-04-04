# This is the script for debugging a specific website
import urllib2
from bs4 import BeautifulSoup
import pdb
import re


page = urllib2.urlopen('http://simpsons.wikia.com/wiki/Howland_Simpson').read()
soup = BeautifulSoup(page)
#  get the character
character=soup.find(id='WikiaPageHeader').find('h1').string

#  get the episodes the character is in
characterDIV=soup.find(id='mw-content-text').find_all('table')[0].find_all('td')
#get character info
if soup.find(id='mw-content-text').find_all('table'):
	characterDIV=soup.find(id='mw-content-text').find_all('table')[0].find_all('td')
	#get table with info
	for row in characterDIV:
		#get gender and status
		if row.find('a'):
			genderCharacterinfo = str(row.find('a')['href']).lower()
		else:
			genderCharacterinfo = "unknown"
		if "category:male_characters" in genderCharacterinfo:
			character_gender="male"
		if "category:female_characters" in genderCharacterinfo:
			character_gender="female"
		if "category:alive_characters" in genderCharacterinfo:
			character_status="alive"
		if "category:deceased_characters" in genderCharacterinfo:
			character_status="deceased"
		#get rest of attributes
		if row.find_all('b'):
			moreCharacterinfoDIV= row.find_all('b')
			for element in moreCharacterinfoDIV:
				#get hair color
				if "Hair" in element:
					character_hair=str(row.find_next_sibling()).split('<td>')[1].split('</td>')[0].split('\n')[0]
				#get character occupation
				if "Occupation" in element:
					pdb.set_trace()
					character_occupation=str(row.find_next_sibling()).split('<td>')[1].split('</td>')[0].split('\n')[0]
				if "Voiced By" in element:
					#pdb.set_trace()
					character_voicedBy=str(row.find_next_sibling().get_text()).split('\n')[0]
else:
	character_gender ="unknown"
	print(character_gender+ " "+character_status+ character_hair + " "+ character_occupation+ " "+ character_voicedBy)
pdb.set_trace()
