# This is the script for debugging a specific website
import urllib2
from bs4 import BeautifulSoup
import pdb
import re


page = urllib2.urlopen('http://simpsons.wikia.com/wiki/Bart_Simpson').read()
soup = BeautifulSoup(page)
#  get the character
character=soup.find(id='WikiaPageHeader').find('h1').string

#  get the episodes the character is in
checkDIV=soup.find(id='mw-content-text').find_all('img')[0]['data-src']
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
	episodes= ["none"]

# out put the result as one to one data format into result file
for episode in episodes:
	if episode!="none":
	    episode_name = episode.find_parent('i').find_next_sibling('a').string
	else:
		episode_name = episode

pdb.set_trace()
