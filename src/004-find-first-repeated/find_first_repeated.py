def findFirstRepeated(gifts):

  if not isinstance(gifts, list):
    raise TypeError('gifts must be a list')

  iRepeat = None

  for index, gift in enumerate(gifts):

    if not isinstance(gift, int):
      raise TypeError('gifts must be a list of integers')

    try:
      indexRepeatedTemp = gifts.index(gift, index + 1)
      if iRepeat is None or indexRepeatedTemp < iRepeat:
        iRepeat = indexRepeatedTemp
    except ValueError:
      continue

  return gifts[iRepeat] if iRepeat is not None else -1
