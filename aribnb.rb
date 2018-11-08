


# back to back pending reservation requests
# num nights
pending = [1,7,2,1,10,1] #17
# pending = [1,6,2]


def accept_booking(pending)
#   if length of pending = 3
#   if pending.length == 3
#     if pending[0] + pending[2] > pending[1]
#       puts pending[0] + pending[2]
#       return pending[0] + pending[2]
#     else
#       puts pending[1]
#     end
#   end

  # totals_so_far store the answer to the problem at position i
  # imagining that the array was only of length i
  totals_so_far = Array.new pending.length

  if (i == 0)
    totals_so_far[i] = pending[i]
  end

  if (i == 1)
    totals_so_far[i] = max(pending[i], pending[i-1])
  end

  for i in pending
    pending[i]

    #Choose this one, or not choose it
    # I can't take i-1 and I get the max of everything before it.
    choose_this_one_max = pending[i] + totals_so_far[i-2]

    not_choose_this_one_max = totals_so_far[i-1]

    pending[i] = max(choose_this_one_max, not_choose_this_one_max)

  end

  totals_so_far[-1]
end

accept_booking(pending)
