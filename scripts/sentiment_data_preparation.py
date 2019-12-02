# -*- coding: utf-8 -*-

from data_utils import remove_cols, vote_to_opinion, preprocessing
#%%


def run(df):
    #Features selection
    df = remove_cols(df)

    #Create new feature "opinion" based on vote
    df = vote_to_opinion(df)

    #Remove neutral reviews
    df.drop(df[df.opinion == 'neutral'].index, inplace=True)
    #alternative to drop: df[df['opinion'].map(lambda x: str(x)!="neutral")]
    reviews = df['reviewText'].tolist()
    # Preprocessing
    df['preprocessedReview'] = preprocessing(reviews)

    
'''
    #Remove stop words
    df['reviewTextNoStopWords'] = remove_stop_words(df['reviewText'])

    #Sentence tokenization
    df['reviewTextTokenized'] = tokenization(df['reviewTextNoStopWords'])


    #Drop non-final review texts
    df.drop(['reviewText', 'reviewTextNoStopWords'], axis=1)
    
    #Save prepared dataset for Sentiment Analysis
    #df.to_csv("datasets\preparedForSentimentAnalysis.csv", sep='\t', encoding='utf-8')

OLD #%%
#Get the reviews
reviews_values = df.reviewText.values
reviews = [reviews_values[i] for i in range(len(reviews_values))]
#%%
#Remove stop words
filtered_reviews = removing_stop_words(reviews)

#%%
#Sentence tokenization
reviews = tokenization(filtered_reviews)
#%%'''

''' OLD reviews = df.reviewText.values
labels = df.opinion.values

if df.opinion[3] == "positive":
    print("\nPositive:", reviews[3][:90], "...")
else:
    print("\nNegative:", reviews[3][:90], "...")
    
positive_reviews = [reviews[i] for i in range(len(reviews)) if labels[i] == "positive"]
negative_reviews = [reviews[i] for i in range(len(reviews)) if labels[i] == "negative"]

#%% Tokenization

positive_tokenized = tokenization(positive_reviews)
negative_tokenized = tokenization(negative_reviews)

#%% Stop words

positive_filtered = removing_stop_word(positive_tokenized)
negative_filtered = removing_stop_words(negative_tokenized)'''

