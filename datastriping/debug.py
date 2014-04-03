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
for row in characterDIV:
	if row.find('a'):
		genderCharacterinfo = str(row.find('a')['href']).lower()
	else:
		genderCharacterinfo = "unknown"
	if "category:male_characters" in genderCharacterinfo:
		print("male")
	if "category:female_characters" in genderCharacterinfo:
		print("female")
	if "category:alive_characters" in genderCharacterinfo:
		print("alive")
	if "category:deceased_characters" in genderCharacterinfo:
		print("dead")
if characterDIV[7].find_all('b'):
	moreCharacterinfoDIV= characterDIV[7].find_all('b')
	for element in moreCharacterinfoDIV:
		if "hair" in element:
			pdb.set_trace()
			hairDIV=characterDIV[7].find_next_sibling('td')
#character_info=checkDIV.replace("\n", "")
#gender=character_info.split('gender')
#print((checkDIV.encode('UTF-8')).split('td'))
pdb.set_trace()
if checkDIV:
	#pdb.set_trace()
	episodesDIV=checkDIV.find_parent().find_next_sibling('table')
else:
	episodesDIV = None

if episodesDIV:
	episodes1=episodesDIV.find_all(text="Episode")
	episodes2=episodesDIV.find_all(text="THOH")
	episodes = episodes1+episodes2
	if not episodes:
		episodes=["none"]
else:
	repisodes= ["none"]

# out put the result as one to one data format into result file
for episode in episodes:
	if episode!="none":
	    episode_name = episode.find_parent('i').find_next_sibling('a').string
	else:
		episode_name = episode

pdb.set_trace()
